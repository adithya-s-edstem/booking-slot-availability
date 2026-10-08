export function program(bookings, D) {
  const START = "09:00";
  const END = "18:00";

  function getSplitTimeAsNumber(time) {
    let [h, m] = time.split(":");
    h = Number(h);
    m = Number(m);
    return [h, m];
  }

  function padZero(number) {
    if (number < 10 && number > -1) return `0${number}`;
    return number;
  }

  function getIncrementedTime(increment, current) {
    let [new_h, new_m] = getSplitTimeAsNumber(current);
    new_m = new_m + increment;

    if (new_m >= 60) {
      new_m = Math.abs(60 - new_m);
      new_h = new_h + 1;
    }

    return `${padZero(new_h)}:${padZero(new_m)}`;
  }

  function checkIfTimeAisGreaterThanTimeB(time_a, time_b) {
    let [a_h, a_m] = getSplitTimeAsNumber(time_a);
    let [b_h, b_m] = getSplitTimeAsNumber(time_b);

    if (a_h > b_h) return true;

    if (a_h === b_h) {
      if (a_m >= b_m) return true;
    }

    return false;
  }

  function createIntervalString(start, end) {
    return `${start}-${end}`;
  }

  function getAllIntervals(interval) {
    let i = START;
    const intervals = [];
    do {
      let tmp_start = i;
      i = getIncrementedTime(interval, i);
      intervals.push(createIntervalString(tmp_start, i));
    } while (checkIfTimeAisGreaterThanTimeB(END, i));
    return intervals;
  }

  //  console.log(getAllIntervals(30))

  // Delete after
  const tmp_bookings = ["09:00-09:30", "11:00-13:00", "14:00-18:00"];
  //

  function checkIfInBetween(newInterval, bookedIntervals) {}

  console.log(checkIfInBetween("08:10-08:55"));

  return null;
}
