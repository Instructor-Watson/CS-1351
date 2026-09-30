import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { AutograderEngine } from './AutograderEngine.js';

const catalog = JSON.parse(readFileSync(resolve('data/assignments.json'), 'utf8'));

describe('reference Java solutions', () => {
  it('accepts the student vowel string and contains approach', async () => {
    const source = `import java.util.Scanner;
      public class VowelCounter {
        public static void main(String[] args) {
          Scanner input = new Scanner(System.in);
          System.out.print("Enter one word: ");
          String word = input.nextLine().toLowerCase();
          int vowels = 0;
          String allVowels = "aeiou";
          for (int i = 0; i < word.length(); ++i) {
            if (allVowels.contains("" + word.charAt(i))) {
              vowels += 1;
            }
          }
          System.out.println("Vowels: " + vowels);
        }
      }`;
    const specification = readFileSync(resolve('data/tests/week06-vowel-counter.json'), 'utf8');
    const engine = new AutograderEngine();
    const result = await engine.gradeSubmission(source, specification);
    expect(result.failedTests).toBe(0);

    // Each vowel is required, even when the others are present in a string.
    for (const vowel of 'aeiou') {
      const missingVowel = source.replace('"aeiou"', `"${'aeiou'.replace(vowel, '')}"`);
      const incomplete = await engine.gradeSubmission(missingVowel, specification);
      expect(incomplete.testCases.find((test) => test.name === 'vowels').passed).toBe(false);
    }

    const commentOnly = source.replace('"aeiou"', '"" /* "aeiou" */');
    const commented = await engine.gradeSubmission(commentOnly, specification);
    expect(commented.testCases.find((test) => test.name === 'vowels').passed).toBe(false);
  });

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
