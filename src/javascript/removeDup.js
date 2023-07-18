var removeDuplicates = function (nums) {
  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return {
    length: i + 1,
    nums,
  };
};

console.log(removeDuplicates([0, 1, 1, 2, 2, 3, 4]));
