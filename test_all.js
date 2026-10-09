import { addTimeTest } from "./add_time.test.js";
import { compareTimeTest } from "./compare_time.test.js";
import { findFreeBlocksTest } from "./find_free_blocks.test.js";
import { findFreeSlotsTest } from "./find_free_slots.test.js";
import { findSplitIntervalsTest } from "./find_split_intervals.test.js";
import { getValidTimeBlockOrNullTest } from "./get_valid_time_block_or_null.test.js";
import { padTimeTest } from "./pad_time.test.js";
import { sortSlotsTest } from "./sort_slots.test.js";

const tests = [
  findFreeSlotsTest,
  findFreeBlocksTest,
  sortSlotsTest,
  getValidTimeBlockOrNullTest,
  findSplitIntervalsTest,
  addTimeTest,
  padTimeTest,
  compareTimeTest,
];

function testAll() {
  let testCount = 0;
  let failedCount = 0;

  console.log("\nTESTS \n");

  tests.map((test) => {
    const results = test();
    console.log("\n----\n");
    testCount += results.testCount;
    failedCount += results.failedCount;
  });

  console.log(`Total ${failedCount} out of ${testCount} tests failed`);
}

testAll();
