/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums.includes(target)) return nums.indexOf(target);

  let middle;
  const copyNums = [...nums];

  while (middle !== target) {
    middle = nums[Math.floor(nums.length / 2)];

    if (nums.length === 1) {
      if (middle > target) {
        return !(copyNums.indexOf(middle) - 1) || 0;
      } else {
        return copyNums.indexOf(middle) + 1;
      }
    }

    if (middle > target) {
      nums.splice(nums.indexOf(middle), nums.length);
    } else {
      nums.splice(0, nums.indexOf(middle));
    }
  }
};

const input = [1, 3];

console.time("algo");
console.log(searchInsert(input, 1));
console.timeEnd("algo");
