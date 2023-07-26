/**
 * NOTES:
 * algo: sliding window
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let maxAverage = sum / k;

  for (let end = k; end < nums.length; end++) {
    sum += nums[end] - nums[end - k]; // end - k = first element of the window

    maxAverage = Math.max(maxAverage, sum / k);
  }

  return maxAverage;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));
console.log(findMaxAverage([0, 1, 1, 3, 3], 4));
console.log(findMaxAverage([-1], 1));
console.log(findMaxAverage([0, 4, 0, 3, 2], 1));
