import { addTime } from "./add_time.js";
import { testOrchestrator } from "./test_orchestrator.js";

export function addTimeTest() {
  const questions = [
    {
      title: "Adds minutes within the same hour",
      input: ["09:10", "15"],
      expected: "09:25",
    },
    {
      title: "Adds minutes that goes over the same hour",
      input: ["17:45", "7"],
      expected: "17:52",
    },
    {
      title: "Adds 0 digit padding to hours and minutes less than 10.",
      input: ["01:21", "48"],
      expected: "02:09",
    },
    {
      title: "Goes to next day when hour goes over 23 hours",
      input: ["23:50", "20"],
      expected: "00:10",
    },
    {
      title: "Goes to next hour when minute goes over 59 minutes",
      input: ["10:30", "30"],
      expected: "11:00",
    },
  ];

  const result = testOrchestrator("addTime", addTime, questions);

  return { testCount: result.testCount, failedCount: result.failedCount };
}

addTimeTest();
