export function padTime(time) {
  const [hour, minute] = time.split(":");
  let new_hour = hour;
  let new_minute = minute;

  if (hour < 10) {
    if (new_hour.length < 2) new_hour = `0${new_hour}`;
  }
  if (minute < 10) {
    if (new_minute.length < 2) new_minute = `0${new_minute}`;
  }

  const new_time = `${new_hour}:${new_minute}`;

  return new_time;
}
