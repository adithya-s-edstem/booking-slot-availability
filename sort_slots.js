export function sortSlots(slots) {
  /*
    Take all start times, remove ":" for a continuous number
    create an array of objects with this number as key
    sort based on start time
    then push values of each key to array in order
  */

  const start_times = slots.map((slot) => {
    let start_time = slot.split("-")[0];
    const new_start_time = start_time.replace(":", "");
    return new_start_time;
  });

  const slot_objects = slots.map((slot, index) => ({
    key: start_times[index],
    value: slot,
  }));

  const sorted_slot_objects = slot_objects.sort(
    (slot_a, slot_b) => slot_a.key - slot_b.key,
  );

  const sorted_slots = sorted_slot_objects.map(
    (slot_object) => slot_object.value,
  );

  return sorted_slots;
}
