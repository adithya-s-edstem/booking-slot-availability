import { compareTime } from "./compare_time.js";

export function checkIfRoomAvailable(room, requested_slot) {
  const slots = room.slots;
  const [r_start, r_end] = requested_slot.split("-");

  let i = 0;
  let not_in_any_bookings = "placeholder";

  let end_reached = false;

  const first_slot = slots[0];
  const last_slot = slots[slots.length - 1];
  const [f_start, f_end] = first_slot.split("-");
  const [l_start, l_end] = last_slot.split("-");

  // if (compareTime(r_end, f_start))

  function incrementer() {
    const selected_slot = slots[i];
    if (selected_slot === undefined) {
      end_reached = true;
      return;
    }
    const [start, end] = selected_slot.split("-");

    // Check if slot end before any booked event starts or starts after every booked event ends
    if (
      compareTime(r_end, start, "earlier") ||
      compareTime(r_end, start, "equal") ||
      compareTime(r_start, end, "later") ||
      compareTime(r_start, end, "equal")
    ) {
      // console.log("reached0");
      not_in_any_bookings = true;
    } else {
      // console.log("reached");
      not_in_any_bookings = false;
      end_reached = true;
    }

    if (i < slots.length) {
      i++;
      return;
    }
    end_reached = true;
  }

  do {
    incrementer();
  } while (!end_reached && !not_in_any_bookings);

  return not_in_any_bookings;
}
