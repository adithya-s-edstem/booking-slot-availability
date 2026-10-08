export function program(bookings, D) {
  const START = "09:00";
  const END = "18:00";

  function getIncrementedTime(increment, current) {
    const [current_h, current_m] = current.split(":");
    let new_h = Number(current_h);
    let new_m = Number(current_m) + increment;
    if (new_m >= 60) {
      new_m = Math.abs(60 - new_m);
      new_h = new_h + 1;
    }
    if (new_h < 10) new_h = `0${new_h}`;
    if (new_m < 10) new_m = `0${new_m}`;
    return `${new_h}:${new_m}`;
  }

  function checkIfTimeAisGreaterThanTimeB(time_a, time_b) {
    let [a_h, a_m] = time_a.split(":");
    let [b_h, b_m] = time_b.split(":");
    [a_h, a_m, b_h, b_m] = [Number(a_h), Number(a_m), Number(b_h), Number(b_m)];

    if (a_h > b_h) return true;

    if (a_h === b_h) {
      if (a_m >= b_m) return true;
    }

    return false;
  }

  function getAllIntervals(interval) {
    let i = START;
    const intervals = [];
    do {
      intervals.push(i)
      i = getIncrementedTime(interval, i);
    } while (checkIfTimeAisGreaterThanTimeB(END, i));
    console.log(intervals)
  }

  getAllIntervals(30);

  return null;
}
