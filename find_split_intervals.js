import { addTime } from "./add_time.js";
import { compareTime } from "./compare_time.js";
import { getValidTimeBlockOrNull } from "./get_valid_time_block_or_null.js";

export function findSplitIntervals(start, end, interval) {
  const split_intervals = [];

  /*
    Take start time
    Add interval (needs time addition)
    Check if new time goes over end time (need time comparison)
    get valid time block with start time and new_time
    push to array and return
  */

  let end_reached = false;
  let start_time = start;

  function incrementer() {
    let incremented_time = addTime(start_time, interval);
    if (compareTime(incremented_time, end, "later")) {
      end_reached = true;
      return;
    }
    let new_interval = getValidTimeBlockOrNull(start_time, incremented_time);
    if (new_interval !== null) split_intervals.push(new_interval);
    start_time = incremented_time;
  }

  do {
    incrementer();
  } while (!end_reached);

  return split_intervals;
}
