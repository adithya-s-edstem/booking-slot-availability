import { findFreeBlocks } from "./find_free_blocks.js";
import { testOrchestrator } from "./test_orchestrator.js";

export function findFreeBlocksTest() {
  const questions = [
    {
      title: "Returns an array of time blocks which are free",
      input: ["09:00", "10:00", ["09:40-09:57", "09:05-09:11", "09:20-09:37"]],
      expected: ["09:00-09:05", "09:11-09:20", "09:37-09:40", "09:57-10:00"],
    },
  ];

  const result = testOrchestrator("findFreeBlocks", findFreeBlocks, questions);

  return { testCount: result.testCount, failedCount: result.failedCount };
}
