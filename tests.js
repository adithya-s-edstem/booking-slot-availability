import { program } from "./program.js";

function assert(message, expected, input) {
  const actual = program(input);
  if (actual === expected) {
    console.log(`PASS: ${message}`);
    return;
  }
  console.log(`FAIL: ${message}`);
  return;
}

function tests() {
  assert("Q1. Example 1", ["09:00-09:30", "11:00-13:00", "14:00-18:00"], 30);
  assert("Q1. Example 2", ["12:00-16:00"], 15);
  assert("Q1. Example 3", ["09:20-17:00"], 60);
}

tests();
