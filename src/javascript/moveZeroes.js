/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const len = nums.length;
  let lastNonZeroIndex = 0;

  for (let i = 0; i < len; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroIndex] = nums[i];
      lastNonZeroIndex++;
    }
  }

  // fill zeroes
  for (; lastNonZeroIndex < len; lastNonZeroIndex++) {
    nums[lastNonZeroIndex] = 0;
  }

  console.log({ nums });
};

moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([0]);
