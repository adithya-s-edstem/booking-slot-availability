import { checkIfTimeInBetween } from "./check_if_time_inbetween.js";

export function checkIfRoomAvailable(room, requested_slot) {
  const slots = room.slots;
  const [r_start, r_end] = requested_slot.split("-");

  let i = 0;
  let not_in_any_bookings = true;

  let end_reached = false;

  function incrementer() {
    const selected_slot = slots[i];

    if (selected_slot === undefined) {
      end_reached = true;
      return;
    }

    // console.log(selected_slot);

    const [start, end] = selected_slot.split("-");

    // console.log(start, end);

    if (
      checkIfTimeInBetween(start, end, r_start) ||
      checkIfTimeInBetween(start, end, r_end)
    ) {
      // console.log(room, requested_slot);
      not_in_any_bookings = false;
      // return;
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
