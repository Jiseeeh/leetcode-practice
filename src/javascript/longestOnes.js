/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let ones = 0,
    longest = 0,
    start = 0,
    toFlipped = k;

  for (let end = 0; end < nums.length; end++) {
    const current = nums[end];

    if (current === 1) {
      ones++;
    } else if (current === 0 && toFlipped !== 0) {
      ones++;
      toFlipped--;
    } else {
      longest = Math.max(ones, longest);
      end = start;
      start++;
      ones = 0;
      toFlipped = k;
    }
  }

  longest = Math.max(ones, longest);
  return longest;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
