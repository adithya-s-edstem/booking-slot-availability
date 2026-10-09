import { compareTime } from "./compare_time.js";
import { testOrchestrator } from "./test_orchestrator.js";

export function compareTimeTest() {
  const questions = [
    {
      title: "09:01 is not earlier than 09:00",
      input: ["09:01", "09:00", "earlier"],
      expected: false,
    },
    {
      title: "09:01 is later than 09:00",
      input: ["09:01", "09:00", "later"],
      expected: true,
    },
    {
      title: "00:00 is earlier than 01:00",
      input: ["00:00", "01:00", "earlier"],
      expected: true,
    },
    {
      title: "12:00 is not later than 13:00",
      input: ["12:00", "13:00", "later"],
      expected: false,
    },
  ];

  const result = testOrchestrator("compareTime", compareTime, questions);

  return { testCount: result.testCount, failedCount: result.failedCount };
}
