import { compareTime } from "./compare_time.js";

export function checkIfTimeInBetween(start, end, input) {
  if (compareTime(start, input, "equal") || compareTime(end, input, "equal")) {
    return true;
  }

  if (
    compareTime(input, start, "later") &&
    compareTime(input, end, "earlier")
  ) {
    return true;
  }

  return false;
}
