import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { AutograderEngine } from './AutograderEngine.js';

const catalog = JSON.parse(readFileSync(resolve('data/assignments.json'), 'utf8'));

describe('reference Java solutions', () => {
  for (const assignment of catalog.assignments) {
    it(`${assignment.id} passes every browser check`, async () => {
      const source = readFileSync(resolve('solutions', assignment.starterCode), 'utf8');
      const specification = readFileSync(resolve('data', assignment.testSuiteFile), 'utf8');
      const result = await new AutograderEngine().gradeSubmission(source, specification);
      const failures = result.testCases
        .filter((test) => !test.passed)
        .map((test) => `${test.displayName}: ${test.message}`);

      expect(failures, failures.join('\n')).toEqual([]);
    });
  }

  it('accepts MyProfile output labels regardless of capitalization', async () => {
    const source = readFileSync(resolve('solutions', 'MyProfile.java'), 'utf8')
      .replace('Name:', 'name:')
      .replace('Favorite number:', 'FAVORITE NUMBER:')
      .replace('Doubled number:', 'dOuBlEd NuMbEr:')
      .replace('Favorite price:', 'favorite price:');
    const specification = readFileSync(resolve('data', 'tests', 'week02-my-profile.json'), 'utf8');

    const result = await new AutograderEngine().gradeSubmission(source, specification);
    const labelsCheck = result.testCases.find((test) => test.name === 'labels');

    expect(labelsCheck?.passed).toBe(true);
  });
});
