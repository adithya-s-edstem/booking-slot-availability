import { padTime } from "./pad_time.js";
import { testOrchestrator } from "./test_orchestrator.js";

export function padTimeTest() {
  const questions = [
    {
      title: "Pads time less than 10 (hour only)",
      input: ["9:33"],
      expected: "09:33",
    },
    {
      title: "Pads time less than 10 (minute only)",
      input: ["09:3"],
      expected: "09:03",
    },
    {
      title: "Pads time less than 10 (hour and minutes)",
      input: ["9:3"],
      expected: "09:03",
    },
    {
      title: "Doesn't pad time 10 and above",
    },
    {
      title: "Doesn't pad time that already is padded",
    },
  ];

  const result = testOrchestrator("padTime", padTime, questions);

  return { testCount: result.testCount, failedCount: result.failedCount };
}

padTimeTest();
