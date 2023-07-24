/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0,
    right = height.length - 1,
    area = 0;

  for (let i = 0; i < height.length; i++) {
    // get area of the current left and right
    // we can get the width by subtracting right from left
    const width = right - left;

    const currentArea = Math.min(height[left], height[right]) * width;
    area = Math.max(currentArea, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return area;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
