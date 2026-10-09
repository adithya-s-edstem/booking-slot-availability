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
      input: ["11:3"],
      expected: "11:03",
    },
    {
      title: "Pads time less than 10 (hour and minutes)",
      input: ["9:3"],
      expected: "09:03",
    },
    {
      title: "Doesn't pad hours and minutes greater than 10",
      input: ["10:33"],
      expected: "10:33",
    },
    {
      title:
        "Doesn't pad hours greater than 10 but pads minutes if less than 10",
      input: ["10:3"],
      expected: "10:03",
    },
    {
      title: "Doesn't pad time that already is padded (hours only)",
      input: ["09:1"],
      expected: "09:01",
    },
    {
      title: "Doesn't pad time that already is padded (minutes only)",
      input: ["9:01"],
      expected: "09:01",
    },
    {
      title: "Doesn't pad time that already is padded (hours and minutes)",
      input: ["09:01"],
      expected: "09:01",
    },
    {
      title: "Pads zero time (hours and minutes)",
      input: ["0:0"],
      expected: "00:00",
    },
    {
      title: "Pads zero time (hours only)",
      input: ["0:00"],
      expected: "00:00",
    },
    {
      title: "Pads zero time (minutes only)",
      input: ["00:0"],
      expected: "00:00",
    },
    {
      title: "Doesn't pad already padded 0 time (hours and minutes)",
      input: ["00:00"],
      expected: "00:00",
    },
    {
      title: "Doesn't pad already padded 0 time (hours only)",
      input: ["00:0"],
      expected: "00:00",
    },
    {
      title: "Doesn't pad already padded 0 time (minutes only)",
      input: ["0:00"],
      expected: "00:00",
    },
  ];

  const result = testOrchestrator("padTime", padTime, questions);

  return { testCount: result.testCount, failedCount: result.failedCount };
}

padTimeTest();
