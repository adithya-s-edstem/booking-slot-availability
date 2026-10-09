export function findFreeSlots(bookings, D) {
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

  function checkIfInBetween(input, start, end) {
    const [input_h, input_m] = getSplitTimeAsNumber(input);
    const [start_h, start_m] = getSplitTimeAsNumber(start);
    const [end_h, end_m] = getSplitTimeAsNumber(end);

    if (input_h < start_h || input_h > end_h) return false;

    const SAME_HOUR = input_h === start_h && input_h === end_h;
    if (SAME_HOUR) {
      if (input_m >= start_m && input_m <= end_m) return true;
      return false;
    }

    const STARTING_IN_SAME_HOUR = input_h === start_h && input_h !== end_h;
    if (STARTING_IN_SAME_HOUR) {
      if (input_m >= start_m) return true;
      return false;
    }

    const ENDING_IN_SAME_HOUR = input_h === end_h && input_h !== start_h;
    if (ENDING_IN_SAME_HOUR) {
      if (input_m <= end_m) return true;
      return false;
    }

    return true;
  }

  function checkIfIntervalInBetween(interval, start, end) {
    const [interval_start, interval_end] = getSplitInterval(interval);

    const IS_INTERVAL_START_IN_BETWEEN = checkIfInBetween(
      interval_start,
      start,
      end,
    );
    if (IS_INTERVAL_START_IN_BETWEEN) return true;

    const IS_INTERVAL_END_IN_BETWEEN = checkIfInBetween(
      interval_end,
      start,
      end,
    );
    if (IS_INTERVAL_END_IN_BETWEEN) return true;

    const IS_START_IN_BETWEEN_INTERVAL = checkIfInBetween(
      start,
      interval_start,
      interval_end,
    );
    if (IS_START_IN_BETWEEN_INTERVAL) return true;

    const IS_END_IN_BETWEEN_INTERVAL = checkIfInBetween(
      end,
      interval_start,
      interval_end,
    );
    if (IS_END_IN_BETWEEN_INTERVAL) return true;

    return false;
  }

  function checkIfIntervalInBetweenInterval(new_interval, booked_interval) {
    const [start, end] = getSplitInterval(booked_interval);
    return checkIfIntervalInBetween(new_interval, start, end);
  }

  function isInBooking(interval) {
    let flag = false;
    bookings.map((booking) => {
      if (!flag && checkIfIntervalInBetweenInterval(interval, booking))
        flag = true;
    });
    return flag;
  }

  const intervals = getAllIntervals(D);

  const free_intervals = [];

  intervals.map((interval) => {
    if (!isInBooking(interval)) free_intervals.push(interval);
  });

  return free_intervals;
}
