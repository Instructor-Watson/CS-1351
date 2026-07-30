/**
 * Browser-only Java assignment checker.
 *
 * GitHub Pages cannot launch javac or execute arbitrary Java programs. This
 * engine therefore performs local syntax and source-structure checks. No
 * student source is transmitted or persisted outside browser storage.
 */
import { parse } from 'java-parser';
import { TestSuiteLoader } from './TestSuiteLoader.js';

export class AutograderEngine {
  constructor(testSuiteLoader = null) {
    this.testSuiteLoader = testSuiteLoader || new TestSuiteLoader();
  }

  isReady() {
    return true;
  }

  async loadTestSuite(testFilePath) {
    return this.testSuiteLoader.loadTestSuite(testFilePath);
  }

  async gradeSubmission(studentCode, testSuiteCode) {
    if (!studentCode || studentCode.trim() === '') {
      throw new Error('Java code cannot be empty');
    }

    const started = performance.now();
    const specification = typeof testSuiteCode === 'string'
      ? JSON.parse(testSuiteCode)
      : testSuiteCode;
    const sourceWithoutComments = removeJavaComments(studentCode);
    let syntaxError = null;

    try {
      parse(studentCode);
    } catch (error) {
      syntaxError = normalizeSyntaxError(error);
    }

    const testCases = (specification.tests || []).map((check) => {
      const result = evaluateCheck(check, studentCode, sourceWithoutComments, syntaxError);
      return {
        name: check.id,
        className: 'JavaAssignment',
        displayName: result.displayName || check.title || check.id,
        passed: result.passed,
        message: result.message,
        expectedOutput: null,
        actualOutput: null,
        errorType: result.errorType || null
      };
    });

    if (specification.requireNoTodo !== false) {
      const hasTodo = /\bTODO\b/i.test(studentCode);
      testCases.push({
        name: 'template_completed',
        className: 'JavaAssignment',
        displayName: 'Starter template is completed',
        passed: !hasTodo,
        message: hasTodo
          ? 'Complete or replace every TODO section in the starter code.'
          : 'No unfinished TODO markers remain.',
        expectedOutput: null,
        actualOutput: null,
        errorType: hasTodo ? 'IncompleteTemplate' : null
      });
    }

    const passedTests = testCases.filter((test) => test.passed).length;
    return {
      totalTests: testCases.length,
      passedTests,
      failedTests: testCases.length - passedTests,
      testCases,
      executionTime: performance.now() - started,
      timedOut: false
    };
  }
}

function evaluateCheck(check, originalSource, sourceWithoutComments, syntaxError) {
  const source = check.includeComments ? originalSource : sourceWithoutComments;

  if (check.type === 'compile') {
    return syntaxError
      ? {
          passed: false,
          message: `Java syntax could not be parsed${syntaxError.line ? ` near line ${syntaxError.line}` : ''}: ${syntaxError.message}`,
          errorType: 'SyntaxError'
        }
      : {
          passed: true,
          displayName: `${check.title} (browser syntax check)`,
          message: 'The source has valid Java syntax. Compile and run it in IntelliJ with OpenJDK 26 before submitting.'
        };
  }

  if (check.type === 'source') {
    const matches = (check.patterns || []).map((pattern) => testPattern(pattern, source, check.ignoreCase));
    const passed = check.mode === 'any' ? matches.some(Boolean) : matches.length > 0 && matches.every(Boolean);
    return {
      passed,
      message: passed
        ? check.successMessage || 'The required Java structure was detected.'
        : check.failureMessage || 'A required Java structure was not detected.'
    };
  }

  if (check.type === 'source_count') {
    const count = countPattern(check.pattern, source, check.ignoreCase);
    const minimum = Number(check.minimum || 1);
    return {
      passed: count >= minimum,
      message: count >= minimum
        ? check.successMessage || `Detected ${count} required source structures.`
        : check.failureMessage || `Detected ${count}; at least ${minimum} are required.`
    };
  }

  if (check.type === 'run') {
    const hasMain = /\bstatic\s+void\s+main\s*\(/.test(source);
    return {
      passed: hasMain && !syntaxError,
      displayName: `${check.title} (IntelliJ verification required)`,
      message: hasMain && !syntaxError
        ? 'A runnable entry point was found. Run the required example in IntelliJ with OpenJDK 26 before submitting.'
        : 'Add a valid main method, then run this scenario in IntelliJ.'
    };
  }

  return { passed: false, message: `Unsupported browser check type: ${check.type}` };
}

function testPattern(pattern, source, ignoreCase = false) {
  try {
    return new RegExp(pattern, `${ignoreCase ? 'i' : ''}m`).test(source);
  } catch {
    return false;
  }
}

function countPattern(pattern, source, ignoreCase = false) {
  try {
    return [...source.matchAll(new RegExp(pattern, `${ignoreCase ? 'i' : ''}gm`))].length;
  } catch {
    return 0;
  }
}

function removeJavaComments(source) {
  return source.replace(/\/\/.*?$|\/\*[\s\S]*?\*\//gm, '');
}

function normalizeSyntaxError(error) {
  const token = error?.token || error?.context?.token;
  const line = token?.startLine || token?.endLine || null;
  const message = String(error?.message || error || 'Unknown syntax error')
    .split('\n')[0]
    .trim();
  return { line, message };
}
