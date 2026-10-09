export function getValidTimeBlockOrNull(start, end) {
  if (start === end) {
    return null;
  }
  return `${start}-${end}`;
}
