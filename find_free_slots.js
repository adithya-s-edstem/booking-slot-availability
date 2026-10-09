import { findFreeBlocks } from "./find_free_blocks.js";
import { findSplitIntervals } from "./find_split_intervals.js";

export function findFreeSlots(bookings, D) {
  const START = "09:00";
  const END = "12:00"; // Change to 18:00 after

  const free_slots = [];
  /*

  Find continuous blocks of free time, store in an array
  Take each block out of the array
  find how many intervals can fit in it
  then save those slots
  */

  const free_time_blocks = findFreeBlocks(START, END, bookings);

  free_time_blocks.map((time_block) => {
    const [start, end] = time_block.split("-");
    const free_intervals = findSplitIntervals(start, end, D);
    free_intervals.map((interval) => free_slots.push(interval));
  });

  return free_slots;
}
