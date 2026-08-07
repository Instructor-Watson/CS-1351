import { readFile, readdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const resourcesDirectory = fileURLToPath(
  new URL('../data/markdown_resources/', import.meta.url)
);
const manifestPath = join(resourcesDirectory, 'manifest.json');
const preferredOrder = [
  'LOOP_BASED_INPUT_VALIDATION_GUIDE.md',
  'PROJECT_DESCRIPTION.md',
  'PROJECT_PLANNING_GUIDE.md',
  'MARKDOWN_GUIDE.md',
  'PROJECT_PROPOSAL_EXAMPLE.md',
  'PROJECT_README_CHECKLIST.md',
  'PROJECT_PRESENTATION_GUIDE.md',
  'PROJECT_PROPOSAL_RUBRIC.md',
  'PROJECT_PART_1_RUBRIC.md',
  'PROJECT_PART_2_RUBRIC.md'
];
const orderByFileName = new Map(
  preferredOrder.map((fileName, index) => [fileName, index])
);
const pickerTitleOverrides = new Map([
  ['PROJECT_PROPOSAL_EXAMPLE.md', 'Proposal Example'],
  ['PROJECT_PROPOSAL_RUBRIC.md', 'Personal Project Proposal rubric'],
  ['PROJECT_PART_1_RUBRIC.md', 'Personal Project Part 1 rubric'],
  ['PROJECT_PART_2_RUBRIC.md', 'Personal Project Part 2 rubric']
]);

function titleFromMarkdown(markdown, fileName) {
  const heading = markdown.match(/^#\s+(.+?)\s*$/m)?.[1];
  if (heading) {
    return heading
      .replace(/\[([^\]]+)]\([^)]*\)/g, '$1')
      .replace(/[*_`]/g, '')
      .trim();
  }

  return fileName
    .replace(/\.md$/i, '')
    .replaceAll('_', ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

const fileNames = (await readdir(resourcesDirectory))
  .filter((fileName) => /^[A-Za-z0-9][A-Za-z0-9_-]*\.md$/i.test(fileName))
  .sort((left, right) => {
    const leftOrder = orderByFileName.get(left) ?? Number.MAX_SAFE_INTEGER;
    const rightOrder = orderByFileName.get(right) ?? Number.MAX_SAFE_INTEGER;
    return leftOrder - rightOrder
      || left.localeCompare(right, 'en', { sensitivity: 'base' });
  });

const resources = await Promise.all(
  fileNames.map(async (fileName) => {
    const markdown = await readFile(join(resourcesDirectory, fileName), 'utf8');
    return {
      fileName,
      title: pickerTitleOverrides.get(fileName) ?? titleFromMarkdown(markdown, fileName)
    };
  })
);

await writeFile(
  manifestPath,
  `${JSON.stringify({ resources }, null, 2)}\n`,
  'utf8'
);

console.log(`Generated Markdown resource manifest with ${resources.length} files.`);
