import { program } from "./program.js";

function log(status, message, bookings,interval, expected, actual) {
  console.log(`${status ? 'PASS' : 'FAIL'}: ${message}\n\n --Existing Bookings--\n ${bookings}\n\n --New Bookings--\n Interval: ${interval}\n Expected: ${expected}\n Actual: ${actual}\n`)
}

function assert(message, expected, input) {
  const [bookings, interval] = input;
  const actual = program(...input);

  let status = false;
  if (actual === expected) status = true;

  log(status, message, bookings, interval, expected, actual)
}

function tests() {
  assert(
    "Q1. Example 1",
    ["09:00-09:30", "11:00-13:00", "14:00-18:00"],
    [
      ["10:00-11:00", "09:30-10:30", "13:00-14:00", "13:15-13:45"],
      30
    ]
  );
  assert(
    "Q1. Example 2",
    ["12:00-16:00"],
    [
      ["09:00-10:00", "10:00-12:00", "16:00-17:50"],
      15
    ]
  );
  assert(
    "Q1. Example 3",
    ["09:20-17:00"],
    [
      ["08:00-09:20", "17:00-19:00,07:00-08:00"],
      60
    ]
  );
}

tests();
