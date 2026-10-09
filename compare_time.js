export function compareTime(a, b, type) {
  let [a_hour, a_minute] = a.split(":");
  a_hour = Number(a_hour);
  a_minute = Number(a_minute);

  let [b_hour, b_minute] = b.split(":");
  b_hour = Number(b_hour);
  b_minute = Number(b_minute);

  switch (type) {
    case "later":
      if (a_hour > b_hour) return true;
      if (a_hour === b_hour) {
        if (a_minute > b_minute) return true;
      }
      return false;
    case "earlier":
      if (a_hour < b_hour) return true;
      if (a_hour === b_hour) {
        if (a_minute < b_minute) return true;
      }
      return false;
    default:
      throw new Error("Invalid type");
  }
}
