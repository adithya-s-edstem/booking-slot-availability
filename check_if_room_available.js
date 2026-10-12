import { compareTime } from "./compare_time.js";

export function checkIfRoomAvailable(room, requested_slot) {
  const slots = room.slots;
  const [r_start, r_end] = requested_slot.split("-");

  let i = 0;
  let not_in_any_bookings = null;

  let end_reached = false;

  function incrementer() {
    const selected_slot = slots[i];

    if (selected_slot === undefined) {
      end_reached = true;
      return;
    }

    const [start, end] = selected_slot.split("-");

    if (
      compareTime(r_start, start, "earlier") &&
      compareTime(r_end, end, "later")
    ) {
      not_in_any_bookings = false;
    } else {
      not_in_any_bookings = true;
    }

    if (i < slots.length) {
      i++;
      return;
    }

    end_reached = true;
  }

  do {
    incrementer();
  } while (!end_reached);

  return not_in_any_bookings;
}
