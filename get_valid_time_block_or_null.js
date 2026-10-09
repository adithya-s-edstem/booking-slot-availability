import { createAndValidateTimeBlock } from "./create_and_validate_time_block.js";

export function getValidTimeBlockOrNull(start, end) {
  let result;
  try {
    result = createAndValidateTimeBlock(start, end);
  } catch {
    result = null;
  }

  return result;
}
