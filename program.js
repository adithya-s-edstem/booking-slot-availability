export function program(bookings, D) {


  function getIncrementedTime(increment, current) {
    const [current_h, current_m] = current.split(":");
    let new_h = Number(current_h);
    let new_m = Number(current_m) + increment;
    if (new_m >= 60) {
      new_m = Math.abs(60 - new_m);
      if (new_m < 10) new_m = `0${new_m}`
      new_h = new_h + 1;
      if (new_h < 10) new_h = `0${new_h}`
    }
    return `${new_h}:${new_m}`;
  }

  console.log(getIncrementedTime(50, "00:15"));

  return null;
}
