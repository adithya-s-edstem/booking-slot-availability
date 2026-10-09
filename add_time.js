export function addTime(value, increment) {
  const [input_hour, input_minute] = value.split(":");

  let new_hour = input_hour;
  let new_minute = input_minute;

  new_minute = Number(input_minute) + Number(increment);

  if (new_minute > 60) new_minute = Math.abs(60 - new_minute);

  if (new_hour < 10) new_hour = `0${new_hour}`;
  if (new_minute < 10) new_minute = `0${new_minute}`;

  const new_time = `${new_hour}:${new_minute}`;

  console.log(new_time);
  return new_time;
}
