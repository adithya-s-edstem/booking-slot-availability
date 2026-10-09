import { getValidTimeBlockOrNull } from "./get_valid_time_block_or_null.js";
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

  // First free slot

  const first_occupied_slot = sorted_occupied_slots[0];

  const first_free_slot = getValidTimeBlockOrNull(
    start,
    first_occupied_slot.split("-")[0],
  );

  if (first_free_slot !== null) free_blocks.push(first_free_slot);

  // Second to last free slots

  let counter = 0;
  let picked_slot;
  let picked_slot_end;
  let new_picked_slot;
  let new_picked_slot_start;
  let new_free_slot;

  function incrementer() {
    picked_slot = sorted_occupied_slots[counter];
    picked_slot_end = picked_slot.split("-")[1];
    counter++;

    new_picked_slot = sorted_occupied_slots[counter];

    if (new_picked_slot === undefined) {
      new_free_slot = getValidTimeBlockOrNull(picked_slot_end, end);
    } else {
      new_picked_slot_start = new_picked_slot.split("-")[0];
      new_free_slot = getValidTimeBlockOrNull(
        picked_slot_end,
        new_picked_slot_start,
      );
    }

    if (new_free_slot !== null) free_blocks.push(new_free_slot);
  }

  // Need to rework this
  [0, 1, 2].map(() => {
    incrementer();
  });

  return free_blocks;
}
