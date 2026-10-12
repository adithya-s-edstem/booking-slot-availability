import { minRoomsNeeded } from "./min_rooms_needed.js";
import { testOrchestrator } from "./test_orchestrator.js";

export function minRoomsNeededTest() {
  const questions = [
    {
      title: "Returns two rooms for 09:00-10:00, 09:30-10:30, 10:00-11:00",
      input: [["09:00-10:00", "09:30-10:30", "10:00-11:00"]],
      expected: 2,
    },
    {
      title: "example: Returns two rooms for overlapping bookings",
      input: [["10:00-11:00", "09:30-10:30", "13:00-14:00", "13:15-13:45"]],
      expected: 2,
    },
    {
      title: "example: Returns single room for non overlapping booking",
      input: [["09:00-10:00", "10:00-12:00", "16:00-17:50"]],
      expected: 1,
    },
  ];

  const result = testOrchestrator("minRoomsNeeded", minRoomsNeeded, questions);

  return { testCount: result.testCount, failedCount: result.failedCount };
}
