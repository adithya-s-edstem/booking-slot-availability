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
  let end_reached = false;

  function incrementer() {
    let picked_slot = sorted_occupied_slots[counter];
    let picked_slot_end = picked_slot.split("-")[1];
    counter++;

    let new_picked_slot = sorted_occupied_slots[counter];
    let new_free_slot;
    if (new_picked_slot === undefined) {
      new_free_slot = getValidTimeBlockOrNull(picked_slot_end, end);
      end_reached = true;
    } else {
      let new_picked_slot_start = new_picked_slot.split("-")[0];
      new_free_slot = getValidTimeBlockOrNull(
        picked_slot_end,
        new_picked_slot_start,
      );
    }

    if (new_free_slot !== null) free_blocks.push(new_free_slot);
  }

  do {
    incrementer();
  } while (!end_reached);

  return free_blocks;
}
