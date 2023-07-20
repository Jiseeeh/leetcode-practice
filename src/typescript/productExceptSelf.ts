// algo i learned from NC
function productExceptSelf(nums: number[]): number[] {
  const output: number[] = [];

  // prefix run
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    output.push(prefix);
    prefix *= nums[i];
  }

  // postfix run
  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= postfix;
    postfix *= nums[i];
  }

  return output;
}

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
console.log(productExceptSelf([1, -1]));
