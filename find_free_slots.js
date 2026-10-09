import { findFreeBlocks } from "./find_free_blocks.js";

export function findFreeSlots(bookings, D) {
  const START = "09:00";
  const END = "12:00"; // Change to 18:00 after

  /*

  Find continuous blocks of free time, store in an array
  Take each block out of the array
  find how many intervals can fit in it
  then save those slots
  */

  const free_time_blocks = findFreeBlocks(START, END, bookings);

  console.log(free_time_blocks);
}
