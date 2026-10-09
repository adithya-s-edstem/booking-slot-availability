import { findFreeSlots } from "./find_free_slots.js";
import { testOrchestrator } from "./test_orchestrator.js";

export function findFreeSlotsTest() {
  const questions = [
    {
      title: "Returns free 60 minute slots when given a list of bookings",
      input: [["09:00-10:00"], 60],
      expected: [
        "10:00-11:00",
        "11:00-12:00",
        "12:00-13:00",
        "13:00-14:00",
        "14:00-15:00",
        "15:00-16:00",
        "16:00-17:00",
        "17:00-18:00",
      ],
    },
  ];

  const result = testOrchestrator("findFreeSlots", findFreeSlots, questions);

  return { testCount: result.testCount, failedCount: result.failedCount };
}

findFreeSlotsTest();
