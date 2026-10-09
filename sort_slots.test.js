import { sortSlots } from "./sort_slots.js";
import { testOrchestrator } from "./test_orchestrator.js";

export function sortSlotsTest() {
  const questions = [
    {
      title: "Returns a sorted array of slots",
      input: [["08:15-09:00", "08:00-08:15", "10:00-12:45", "06:00-07:00"]],
      expected: ["06:00-07:00", "08:00-08:15", "08:15-09:00", "10:00-12:45"],
    },
  ];

  const result = testOrchestrator("sortSlots", sortSlots, questions);

  return { testCount: result.testCount, failedCount: result.failedCount };
}
