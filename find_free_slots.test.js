import { findFreeSlots } from "./find_free_slots.js";
import { testOrchestrator } from "./test_orchestrator.js";

export function findFreeSlotsTest() {
  const questions = [
    {
      title: "question-1",
      input: [["09:00-09:45", "10:15-10:20", "10:20-10:25", "11:45-11:55"], 15],
      expected: [
        "09:45-10:00",
        "10:00-10:15",
        "10:25-10:40",
        "10:40-10:55",
        "10:55-11:10",
        "11:10-11:25",
        "11:25-11:40",
      ],
    },
  ];

  const result = testOrchestrator("findFreeSlots", findFreeSlots, questions);

  return { testCount: result.testCount, failedCount: result.failedCount };
}
