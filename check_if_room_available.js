import { compareTime } from "./compare_time.js";

export function checkIfRoomAvailable(room, requested_slot) {
  let room_available = false;

  const slots = room.slots;
  const total_bookings = slots.length;
  const [r_start, r_end] = requested_slot.split("-");

  let counter = 0;
  let flag = false;

  do {
    if (counter === 0) {
      const [start, end] = slots[counter].split("-");
      if (!compareTime(r_end, start, "earlier")) {
        room_available = true;
        flag = true;
      }
    } else if (counter === total_bookings - 1) {
      const [start, end] = slots[counter].split("-");
      if (!compareTime(r_start, end, "later")) {
        room_available = true;
        flag = true;
      }
    } else {
      // Loop logic here
      counter++;
      if (counter >= total_bookings) flag = true;
    }
  } while (!flag);

  return room_available;
}
