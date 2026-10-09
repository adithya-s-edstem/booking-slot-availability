import { createAndValidateTimeBlockTest } from "./create_and_validate_time_block.test.js";
import { findFreeBlocksTest } from "./find_free_blocks.test.js";
import { findFreeSlotsTest } from "./find_free_slots.test.js";
import { sortSlotsTest } from "./sort_slots.test.js";

const tests = [
  findFreeBlocksTest,
  findFreeSlotsTest,
  sortSlotsTest,
  createAndValidateTimeBlockTest,
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
