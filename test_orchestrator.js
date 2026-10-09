function runTest(program, input, expected) {
  const result = program(...input);
  if (JSON.stringify(result) === JSON.stringify(expected)) return true;
  return false;
}

export function testOrchestrator(program, questions) {
  let testCount = 0;
  let failedCount = 0;

  questions.map((question) => {
    testCount += 1;
    const result = runTest(program, question.input, question.expected);
    if (!result) {
      failedCount += 1;
      console.log(`\u274c FAIL: ${question.title}`);
    }
  });

  return { testCount, failedCount };
}
