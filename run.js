import { findFreeSlots } from "./program.js";

function log(message, bookings,interval, result) {
  console.log(`${message}\n\n --Existing Bookings--\n ${bookings}\n\n --New Bookings--\n Interval: ${interval}\n\n Result: ${result}\n`)
}

function run(message, input) {
  const [bookings, interval] = input;
  const result = findFreeSlots(...input);

  log(message, bookings, interval, result)
}

function tests() {
  run(
    "Q1. Example 1",
    [
      ["10:00-11:00", "09:30-10:30", "13:00-14:00", "13:15-13:45"],
      30
    ]
  );
  run(
    "Q1. Example 2",
    [
      ["09:00-10:00", "10:00-12:00", "16:00-17:50"],
      15
    ]
  );
  run(
    "Q1. Example 3",
    [
      ["08:00-09:20", "17:00-19:00,07:00-08:00"],
      60
    ]
  );
}

tests();
