function increasingTriplet(nums: number[]): boolean {
  let i = Number.MAX_SAFE_INTEGER,
    j = Number.MAX_SAFE_INTEGER,
    k = Number.MAX_SAFE_INTEGER;

  for (let inx = 0; inx < nums.length; inx++) {
    if (nums[inx] <= i) {
      i = nums[inx];
    } else if (nums[inx] <= j) {
      j = nums[inx];
    } else if (nums[inx] <= k) {
      k = nums[inx];
      return true;
    }
  }

  return false;
}

console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));
console.log(increasingTriplet([20, 100, 10, 12, 5, 13]));
