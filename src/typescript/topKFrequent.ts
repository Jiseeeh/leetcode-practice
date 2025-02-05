/* 
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 */

function topKFrequent(nums: number[], k: number): number[] {
  const freqMap = new Map<number, number>();

  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const sorted = Array.from(freqMap.entries()).sort((a, b) => b[1] - a[1]);

  return sorted.slice(0, k).map(([num, freq]) => num);
}

console.log(topKFrequent([5, 3, 1, 1, 1, 3, 73, 1], 1));
console.log(topKFrequent([1], 1));
console.log(topKFrequent([1, 2], 2));
console.log(topKFrequent([1, 2, 3], 3));
