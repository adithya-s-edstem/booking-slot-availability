import { getValidTimeBlockOrNull } from "./get_valid_time_block_or_null.js";
import { testOrchestrator } from "./test_orchestrator.js";

export function getValidTimeBlockOrNullTest() {
  const questions = [
    {
      title: "Returns null for invalid times",
      input: ["09:00", "09:00"],
      expected: null,
    },
    {
      title: "Returns valid time block for valid times",
      input: ["09:00", "10:00"],
      expected: "09:00-10:00",
    },
  ];

  const result = testOrchestrator(
    "getValidTimeBlockOrNull",
    getValidTimeBlockOrNull,
    questions,
  );

  return { testCount: result.testCount, failedCount: result.failedCount };
}
