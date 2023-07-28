/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const nums1Set = new Set(nums1);
  const nums2Set = new Set(nums2);

  let left = [];
  let right = [];

  for (num of nums1Set) {
    if (!nums2Set.has(num)) left.push(num);
  }
  for (num of nums2Set) {
    if (!nums1Set.has(num)) right.push(num);
  }

  
  return [left, right];
};

findDifference([1, 2, 3], [2, 4, 6]);
findDifference([1, 2, 3, 3], [1, 1, 2, 2]);
