import { checkIfRoomAvailable } from "./check_if_room_available.js";
import { testOrchestrator } from "./test_orchestrator.js";

export function checkIfRoomAvailableTest() {
  const questions = [
    {
      title: "Returns false when room is not available",
      input: [
        { slots: ["09:00-10:00", "09:30-10:30", "10:00-11:00"] },
        "09:15-09:20",
      ],
      expected: false,
    },
    {
      title: "Returns true when a future room is available",
      input: [{ slots: ["09:00-10:00", "10:00-11:00"] }, "11:00-11:30"],
      expected: true,
    },
    {
      title: "Returns true when room is available",
      input: [{ slots: ["09:00-09:30", "10:30-11:00"] }, "09:40-09:50"],
      expected: true,
    },
    {
      title: "Returns true when a tightly placed room is available",
      input: [{ slots: ["09:00-09:30", "10:30-11:00"] }, "09:30-10:30"],
      expected: true,
    },
    {
      title: "Returns true when an immediately followed room is available",
      input: [{ slots: ["09:00-09:30", "10:30-11:00"] }, "09:30-10:00"],
      expected: true,
    },
    {
      title:
        "Returns true when a requested slot is immediately before an existing booking",
      input: [{ slots: ["09:00-09:30", "10:30-11:00"] }, "10:00-10:30"],
      expected: true,
    },
  ];

  const result = testOrchestrator(
    "checkIfRoomAvailable",
    checkIfRoomAvailable,
    questions,
  );

  return { testCount: result.testCount, failedCount: result.failedCount };
}
