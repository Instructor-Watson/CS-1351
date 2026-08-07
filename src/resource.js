import DOMPurify from 'dompurify';
import { marked } from 'marked';

const RESOURCE_DIRECTORY = 'markdown_resources';
const MANIFEST_FILE = 'manifest.json';
const THEME_STORAGE_KEY = 'markdown-viewer-theme';
const SELECTED_RESOURCE_KEY = 'markdown-viewer-selected-resource';
const SAFE_FILE_NAME = /^[A-Za-z0-9][A-Za-z0-9_-]*\.md$/i;

const mainElement = document.getElementById('main-content');
const statusElement = document.getElementById('resource-status');
const contentElement = document.getElementById('resource-content');
const downloadLink = document.getElementById('download-resource');
const resourceSelect = document.getElementById('resource-select');
const themeToggle = document.getElementById('theme-toggle');

function getRequestedFile() {
  const fileName = new URLSearchParams(window.location.search).get('file') || '';
  return SAFE_FILE_NAME.test(fileName) ? fileName : null;
}

function getResourceUrl(fileName) {
  return `./${RESOURCE_DIRECTORY}/${encodeURIComponent(fileName)}`;
}

function getReaderUrl(fileName) {
  return `./resource.html?file=${encodeURIComponent(fileName)}`;
}

function getStoredTheme() {
  try {
    const theme = localStorage.getItem(THEME_STORAGE_KEY);
    return theme === 'light' || theme === 'dark' ? theme : null;
  } catch {
    return null;
  }
}

function applyTheme(theme, { persist = false } = {}) {
  const useDarkTheme = theme === 'dark';
  document.documentElement.dataset.theme = useDarkTheme ? 'dark' : 'light';
  document.documentElement.style.colorScheme = useDarkTheme ? 'dark' : 'light';
  themeToggle.setAttribute('aria-pressed', String(useDarkTheme));
  themeToggle.title = useDarkTheme ? 'Use light appearance' : 'Use dark appearance';

  if (persist) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, useDarkTheme ? 'dark' : 'light');
    } catch {
      // The theme still applies for this page when storage is unavailable.
    }
  }
}

function initializeThemeControl() {
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');
  const currentTheme = document.documentElement.dataset.theme
    || (systemPreference.matches ? 'dark' : 'light');
  applyTheme(currentTheme);

  themeToggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme, { persist: true });
  });

  const handleSystemThemeChange = (event) => {
    if (!getStoredTheme()) {
      applyTheme(event.matches ? 'dark' : 'light');
    }
  };

  if (typeof systemPreference.addEventListener === 'function') {
    systemPreference.addEventListener('change', handleSystemThemeChange);
  } else {
    systemPreference.addListener(handleSystemThemeChange);
  }
}

function configureMarkdownRenderer() {
  marked.use({
    gfm: true,
    breaks: false,
    walkTokens(token) {
      if (token.type !== 'link' || !token.href) {
        return;
      }

      const localFileName = token.href.split(/[?#]/, 1)[0].split('/').pop();
      if (SAFE_FILE_NAME.test(localFileName) && !/^[a-z][a-z\d+.-]*:/i.test(token.href)) {
        token.href = getReaderUrl(localFileName);
      }
    }
  });
}

function prepareMarkdown(markdown) {
  // A pipe inside inline code would otherwise be treated as a table-cell divider.
  return markdown.replace(/`([^`\n]+)`/g, (inlineCode) => inlineCode.replaceAll('|', '\\|'));
}

function enhanceRenderedLinks() {
  contentElement.querySelectorAll('a[href]').forEach((link) => {
    // Keep navigation in the same tab so links do not change browsing context unexpectedly.
    link.removeAttribute('target');
    link.removeAttribute('rel');

    const linkedUrl = new URL(link.href, window.location.href);
    if (linkedUrl.href === window.location.href) {
      link.setAttribute('aria-current', 'page');
    }
  });
}

function modernizeTableAlignment() {
  contentElement.querySelectorAll('th[align], td[align]').forEach((cell) => {
    const alignment = cell.getAttribute('align');
    if (alignment === 'left' || alignment === 'center' || alignment === 'right') {
      cell.classList.add(`text-align-${alignment}`);
    }
    cell.removeAttribute('align');
  });
}

function labelContentRegion(resourceTitle) {
  const heading = contentElement.querySelector('h1');
  if (heading) {
    heading.id = 'resource-heading';
    heading.tabIndex = -1;
    contentElement.setAttribute('aria-labelledby', heading.id);
    contentElement.removeAttribute('aria-label');
  } else {
    contentElement.setAttribute('aria-label', resourceTitle);
    contentElement.removeAttribute('aria-labelledby');
  }

  return heading;
}

function makeOverflowRegionsKeyboardAccessible() {
  const regions = [
    ...contentElement.querySelectorAll('table'),
    ...contentElement.querySelectorAll('pre')
  ];

  regions.forEach((region) => {
    if (region.scrollWidth <= region.clientWidth) {
      return;
    }

    region.tabIndex = 0;
    region.setAttribute(
      'aria-label',
      region.tagName === 'TABLE' ? 'Scrollable data table' : 'Scrollable code example'
    );
  });
}

function shouldFocusSelectedResource(fileName) {
  try {
    if (sessionStorage.getItem(SELECTED_RESOURCE_KEY) === fileName) {
      sessionStorage.removeItem(SELECTED_RESOURCE_KEY);
      return true;
    }
  } catch {
    // Focus remains at the start of the document when session storage is unavailable.
  }
  return false;
}

function setSelectedResource(fileName) {
  try {
    sessionStorage.setItem(SELECTED_RESOURCE_KEY, fileName);
  } catch {
    // Navigation still works when session storage is unavailable.
  }
}

function createResourceOption(resource) {
  const option = document.createElement('option');
  option.value = resource.fileName;
  option.textContent = resource.title;
  return option;
}

async function loadResourceMenu(currentFileName) {
  try {
    const response = await fetch(`./${RESOURCE_DIRECTORY}/${MANIFEST_FILE}`, { cache: 'no-cache' });
    if (!response.ok) {
      throw new Error(`Resource catalog request failed with status ${response.status}`);
    }

    const manifest = await response.json();
    const resources = Array.isArray(manifest.resources)
      ? manifest.resources.filter((resource) => (
        resource
        && SAFE_FILE_NAME.test(resource.fileName)
        && typeof resource.title === 'string'
        && resource.title.trim()
      ))
      : [];

    resourceSelect.replaceChildren();

    if (resources.length === 0) {
      const emptyOption = document.createElement('option');
      emptyOption.textContent = 'No resources available';
      resourceSelect.appendChild(emptyOption);
      return;
    }

    if (!currentFileName) {
      const promptOption = document.createElement('option');
      promptOption.value = '';
      promptOption.textContent = 'Choose a resource';
      resourceSelect.appendChild(promptOption);
    }

    resources.forEach((resource) => resourceSelect.appendChild(createResourceOption(resource)));

    if (currentFileName && !resources.some((resource) => resource.fileName === currentFileName)) {
      resourceSelect.appendChild(createResourceOption({
        fileName: currentFileName,
        title: currentFileName.replace(/\.md$/i, '').replaceAll('_', ' ')
      }));
    }

    resourceSelect.value = currentFileName || '';
    resourceSelect.disabled = false;
  } catch (error) {
    console.error('Unable to load Markdown resource catalog:', error);
    const unavailableOption = document.createElement('option');
    unavailableOption.textContent = 'Resource menu unavailable';
    resourceSelect.replaceChildren(unavailableOption);
  }
}

function initializeResourceMenu() {
  resourceSelect.addEventListener('change', () => {
    const fileName = resourceSelect.value;
    if (!SAFE_FILE_NAME.test(fileName)) {
      return;
    }

    setSelectedResource(fileName);
    window.location.assign(getReaderUrl(fileName));
  });
}

function showError(title, message) {
  document.title = `${title} | Java Programming`;
  mainElement.setAttribute('aria-busy', 'false');
  contentElement.hidden = true;
  downloadLink.hidden = true;
  statusElement.hidden = false;
  statusElement.className = 'resource-status resource-error';
  statusElement.setAttribute('role', 'alert');
  statusElement.replaceChildren();

  const errorMark = document.createElement('div');
  errorMark.className = 'resource-error-mark';
  errorMark.setAttribute('aria-hidden', 'true');
  errorMark.textContent = '!';

  const heading = document.createElement('h1');
  heading.tabIndex = -1;
  heading.textContent = title;

  const description = document.createElement('p');
  description.textContent = message;

  const returnLink = document.createElement('a');
  returnLink.className = 'resource-button';
  returnLink.href = './';
  returnLink.textContent = 'Return to the assignment checker';

  statusElement.append(errorMark, heading, description, returnLink);
  heading.focus();
}

async function loadResource(fileName) {
  if (!fileName) {
    showError('Resource not specified', 'Choose a course resource from the Resource menu.');
    return;
  }

  const resourceUrl = getResourceUrl(fileName);

  try {
    const response = await fetch(resourceUrl, { cache: 'no-cache' });
    if (!response.ok) {
      throw new Error(`Resource request failed with status ${response.status}`);
    }

    const markdown = prepareMarkdown(await response.text());
    const renderedHtml = await marked.parse(markdown);
    contentElement.innerHTML = DOMPurify.sanitize(renderedHtml, {
      USE_PROFILES: { html: true },
      FORBID_TAGS: ['button', 'form', 'input', 'select', 'style', 'textarea']
    });
    enhanceRenderedLinks();
    modernizeTableAlignment();

    const firstHeading = contentElement.querySelector('h1');
    const resourceTitle = firstHeading?.textContent?.trim()
      || fileName.replace(/\.md$/i, '').replaceAll('_', ' ');
    const focusTarget = labelContentRegion(resourceTitle);
    document.title = `${resourceTitle} | Java Programming`;

    downloadLink.href = resourceUrl;
    downloadLink.download = fileName;
    downloadLink.setAttribute('aria-label', `Download ${resourceTitle} as a Markdown file`);
    downloadLink.title = `Download ${fileName}`;
    downloadLink.hidden = false;
    statusElement.hidden = true;
    contentElement.hidden = false;
    mainElement.setAttribute('aria-busy', 'false');

    requestAnimationFrame(() => {
      makeOverflowRegionsKeyboardAccessible();
      if (shouldFocusSelectedResource(fileName)) {
        (focusTarget || mainElement).focus();
      }
    });
  } catch (error) {
    console.error('Unable to load Markdown resource:', error);
    showError('Resource unavailable', 'This course resource could not be found or loaded. Check the shared link and try again.');
  }
}

async function initializeViewer() {
  initializeThemeControl();
  initializeResourceMenu();
  configureMarkdownRenderer();

  const fileName = getRequestedFile();
  await Promise.allSettled([
    loadResourceMenu(fileName),
    loadResource(fileName)
  ]);
}

initializeViewer();
