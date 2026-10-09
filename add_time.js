import { padTime } from "./pad_time.js";

export function addTime(value, increment) {
  const [input_hour, input_minute] = value.split(":");

  let new_hour = Number(input_hour);
  let new_minute = Number(input_minute);

  new_minute = new_minute + Number(increment);

  if (new_minute >= 60) {
    new_minute = Math.abs(60 - new_minute);
    new_hour += 1;
  }

  if (new_hour > 23) {
    new_hour = 24 - new_hour;
  }

  const new_time = padTime(`${new_hour}:${new_minute}`);

  return new_time;
}
