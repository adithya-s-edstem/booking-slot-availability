import { checkIfTimeInBetween } from "./check_if_time_inbetween.js";
import { testOrchestrator } from "./test_orchestrator.js";

export function checkIfTimeInBetweenTest() {
  const questions = [
    {
      title: "Return true if 09:00 is between 08:59 and 09:01",
      input: ["08:59", "09:01", "09:00"],
      expected: true,
    },
    {
      title: "Return true if 09:00 is between 08:59 and 09:00",
      input: ["08:59", "09:00", "09:00"],
      expected: true,
    },
    {
      title: "Return true if 08:59 is between 08:59 and 09:00",
      input: ["08:59", "09:00", "08:59"],
      expected: true,
    },
    {
      title: "Return false if 08:00 is between 08:58 and 12:00",
      input: ["08:58", "12:00", "08:00"],
      expected: false,
    },
    {
      title: "Return true if 08:00 is between 06:00 and 12:00",
      input: ["06:00", "12:00", "09:00"],
      expected: true,
    },
  ];

  const result = testOrchestrator(
    "checkIfTimeInbetween",
    checkIfTimeInBetween,
    questions,
  );

  return { testCount: result.testCount, failedCount: result.failedCount };
}
