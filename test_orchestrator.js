function checkEqual(result, expected, type) {
  switch (type) {
    case "string":
    case "null":
    case "boolean":
      if (result === expected) return true;
      return false;
    case "object":
    case "undefined":
      if (JSON.stringify(result) === JSON.stringify(expected)) return true;
      return false;
    default:
      throw new Error("Invalid type");
  }
}

function runTest(program, input, expected) {
  let result;
  try {
    result = program(...input);
  } catch (err) {
    result = err.name;
  }

  return checkEqual(result, expected, typeof result);
}

export function testOrchestrator(programName, program, questions) {
  let testCount = 0;
  let failedCount = 0;

  questions.map((question) => {
    testCount += 1;
    const result = runTest(program, question.input, question.expected);
    if (!result) failedCount += 1;
    console.log(
      `${result ? "\u2705 PASS" : "\u274c FAIL"}: (${programName}) ${question.title}`,
    );
  });

  console.log(
    `${programName}: ${failedCount} out of ${testCount} tests failed`,
  );

  return { testCount, failedCount };
}
