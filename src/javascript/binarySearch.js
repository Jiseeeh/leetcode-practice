/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let middleIndex = start + (end - start) / 2;
    let middleValue = nums[middleIndex];

    if (middleValue > target) end = middleIndex - 1;
    else if (middleValue < target) start = middleIndex + 1;
    else return nums.indexOf(target);
  }
  return -1;
};

console.time("algo");
// console.log(search(Array.from(Array(1003450).keys()), 9657));
console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.timeEnd("algo");
