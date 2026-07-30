/**
 * Build a stable Java filename from an assignment title.
 *
 * Example: "Hello World" -> "hello_world.java"
 *
 * @param {string} assignmentTitle
 * @returns {string}
 */
export function buildSubmissionFilename(assignmentTitle) {
  const normalizedTitle = String(assignmentTitle || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');

  const safeTitle = normalizedTitle || 'assignment';
  return `${safeTitle}.java`;
}

/**
 * Download student work as its requested Java or Markdown file in the browser.
 *
 * @param {string} assignmentTitle
 * @param {string} code
 * @param {Object} [options]
 * @param {Document} [options.documentRef]
 * @param {URL} [options.urlRef]
 * @returns {string}
 */
export function downloadSubmission(assignmentTitle, code, options = {}) {
  if (!assignmentTitle || assignmentTitle.trim() === '') {
    throw new Error('Assignment title is required');
  }

  if (typeof code !== 'string') {
    throw new Error('Code must be a string');
  }

  const { documentRef = document, urlRef = URL, filename: requestedFilename } = options;
  const filename = requestedFilename && /^[A-Za-z_$][\w$]*\.(java|md)$/.test(requestedFilename)
    ? requestedFilename
    : buildSubmissionFilename(assignmentTitle);
  const mimeType = filename.toLowerCase().endsWith('.md') ? 'text/markdown' : 'text/x-java-source';
  const blob = new Blob([code], { type: `${mimeType};charset=utf-8` });
  const objectUrl = urlRef.createObjectURL(blob);
  const link = documentRef.createElement('a');

  link.href = objectUrl;
  link.download = filename;
  link.style.display = 'none';

  documentRef.body.appendChild(link);
  link.click();
  link.remove();
  urlRef.revokeObjectURL(objectUrl);

  return filename;
}
