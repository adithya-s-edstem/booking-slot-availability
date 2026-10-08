export function program(bookings, D) {
  const START = "09:00";
  const END = "18:00";

  function getSplitInterval(interval) {
    let [start, end] = interval.split("-");
    return [start, end];
  }

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

  function compareTime(time_a, time_b, type) {
    let [a_h, a_m] = getSplitTimeAsNumber(time_a);
    let [b_h, b_m] = getSplitTimeAsNumber(time_b);

    switch (type) {
      case "greater":
        if (a_h > b_h) return true;
        if (a_h === b_h) {
          if (a_m > b_m) return true;
        }
        return false;
      
      case "lesser":
        if (a_h < b_h) return true;
        if (a_h === b_h) {
          if (a_m < b_m) return true;
        }
        return false;

      default:
        throw new Error("invalid case");
    }
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
    } while (compareTime(END, i, "greater"));
    return intervals;
  }

  console.log("getAllIntervals", getAllIntervals(30), "\n");

  // Delete after
  const tmp_bookings = ["09:00-09:30", "11:00-13:00", "14:00-18:00"];

  const tmp_booking = "10:00-10:30";
  //

  function checkIfInBetween(newInterval, bookedIntervals) {
    const [newInterval_start, newInterval_end] = getSplitInterval(newInterval);

    const [bookedInterval_start, bookedInterval_end] =
      getSplitInterval(tmp_booking);

    console.log("new", newInterval_start, newInterval_end);
    console.log("booked", bookedInterval_start, bookedInterval_end);

    if (
      compareTime(newInterval_start, bookedInterval_start, "greater") &&
      compareTime(newInterval_end, bookedInterval_end, "lesser")
    )
      return true;

    return false;
  }

  console.log("is in between", checkIfInBetween("10:15-10:45"), "\n");

  return null;
}
