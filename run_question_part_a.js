import { findFreeSlots } from "./find_free_slots.js";

const bookings = ["10:00-11:00", "09:30-10:30", "13:00-14:00", "13:15-13:45"];

const D = 30;

const result = findFreeSlots(bookings, D);

console.log(`\n--Result Part A--\n
  bookings: ${bookings}\n
  D: ${D}\n
  Result: ${result}`);
