import { findFreeBlocksTest } from "./find_free_blocks.test.js";
import { findFreeSlotsTest } from "./find_free_slots.test.js";

const tests = [findFreeBlocksTest, findFreeSlotsTest];

function testAll() {
  let testCount = 0;
  let failedCount = 0;

  tests.map((test) => {
    const results = test();
    testCount += results.testCount;
    failedCount += results.failedCount;
  });

  console.log(`Total ${failedCount} out of ${testCount} tests failed`);
}

testAll();
