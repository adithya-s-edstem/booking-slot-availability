import { sortSlots } from "./sort_slots.js";

export function findFreeBlocks(start, end, occupied_slots) {
  const free_blocks = [];

  /*
    Sort the occupied slots array
    Pick the first slot
    Take start time and the first slot's start time, this is the first free block.
    Take the last picked slot's end time and the next slot's start time, this is the second block. If this block has the same start and end time, discard it and move on till the array is over
  */

  const sorted_occupied_slots = sortSlots(occupied_slots);

  const first_slot = sorted_occupied_slots[0];

  return free_blocks;
}
