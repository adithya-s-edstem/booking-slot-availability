import { findSplitIntervals } from "./find_split_intervals.js";
import { testOrchestrator } from "./test_orchestrator.js";

export function findSplitIntervalsTest() {
  const questions = [
    {
      title: "Returns split intervals between two times",
      input: ["09:15", "09:25", 3],
      expected: ["09:15-09:18", "09:18-09:21", "09:21-09:24"],
    },
  ];

  const result = testOrchestrator(
    "findSplitIntervals",
    findSplitIntervals,
    questions,
  );

  return {
    testCount: result.testCount,
    failedCount: result.failedCount,
  };
}
