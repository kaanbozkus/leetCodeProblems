/* Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2 

Constraints:
n == nums.length
1 <= n <= 5 * 104
-10^9 <= nums[i] <= 10^9

*/

// EASY TO THINK SOLUTION
/*
let majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + Math.floor(nums.length / 2)]) {
      return nums[i];
    }
  }
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
*/

// Boyer Moore Solution
let majorityElement = function (nums) {
  let result = nums[0];
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    result == nums[i] ? counter++ : counter--;
    counter == 0 ? (result = nums[i + 1]) : result;
  }
  return result;
};

console.log(majorityElement([6, 6, 6, 7, 7]));
