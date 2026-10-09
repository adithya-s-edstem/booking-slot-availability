import { createAndValidateTimeBlock } from "./create_and_validate_time_block.js";
import { testOrchestrator } from "./test_orchestrator.js";

export function createAndValidateTimeBlockTest() {
  const questions = [
    {
      title: "Throws on empty time block",
      input: ["09:00", "09:00"],
      expected: "Error",
    },
    {
      title: "Returns a formatted time block",
      input: ["09:00", "10:00"],
      expected: "09:00-10:00",
    },
  ];

  const result = testOrchestrator(
    "createAndValidateTimeBlock",
    createAndValidateTimeBlock,
    questions,
  );

  return { testCount: result.testCount, failedCount: result.failedCount };
}

createAndValidateTimeBlockTest();
