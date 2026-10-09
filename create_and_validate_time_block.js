export function createAndValidateTimeBlock(start, end) {
  if (start === end) throw new Error("Empty block!");
  return `${start}-${end}`;
}
