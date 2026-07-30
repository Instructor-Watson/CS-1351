import { describe, expect, it } from 'vitest';
import { AutograderEngine } from './AutograderEngine.js';

describe('browser-only Java autograder', () => {
  it('checks Java syntax and declarative source requirements', async () => {
    const engine = new AutograderEngine();
    const specification = JSON.stringify({
      tests: [
        { id: 'compile', title: 'Syntax', type: 'compile' },
        { id: 'main', title: 'Main method', type: 'source', patterns: ['static\\s+void\\s+main\\s*\\('] },
        { id: 'loop', title: 'Loop', type: 'source_count', pattern: '\\bfor\\s*\\(', minimum: 1 }
      ],
      requireNoTodo: false
    });
    const source = 'public class Demo { public static void main(String[] args) { for (int i = 0; i < 3; i++) {} } }';

    const result = await engine.gradeSubmission(source, specification);

    expect(result.totalTests).toBe(3);
    expect(result.passedTests).toBe(3);
    expect(result.failedTests).toBe(0);
  });

  it('reports malformed Java without sending the source anywhere', async () => {
    const engine = new AutograderEngine();
    const specification = JSON.stringify({
      tests: [{ id: 'compile', title: 'Syntax', type: 'compile' }],
      requireNoTodo: false
    });

    const result = await engine.gradeSubmission('public class Broken {', specification);

    expect(result.failedTests).toBe(1);
    expect(result.testCases[0].errorType).toBe('SyntaxError');
  });

  it('labels behavior scenarios as IntelliJ verification checks', async () => {
    const engine = new AutograderEngine();
    const specification = JSON.stringify({
      tests: [{ id: 'run', title: 'Sample behavior', type: 'run' }],
      requireNoTodo: false
    });

    const result = await engine.gradeSubmission(
      'class Demo { public static void main(String[] args) {} }',
      specification
    );

    expect(result.testCases[0].passed).toBe(true);
    expect(result.testCases[0].displayName).toContain('IntelliJ verification required');
  });
});
