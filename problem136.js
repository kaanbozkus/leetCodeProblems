/* Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1
 
Constraints:
1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.

*/

/* EASY TO THINK SOLUTION 
let singleNumber = function (nums) {
  if (nums.length == 1) {
    return nums[0];
  } else {
    nums.sort((a, b) => a - b);
    if (nums[0] != nums[1]) {
      return nums[0];
    } else {
      for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] != nums[i - 1] && nums[i] != nums[i + 1]) {
          return nums[i];
        }
      }
    }
    return nums[nums.length - 1];
  }
};

console.log(singleNumber([4, 1, 2, 1, 2]));

*/

// BETTER SOLUTION WITH BIT MANIPULATION XOR

let singleNumber = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result = nums[i] ^ result;
  }
  return result;
};

console.log(singleNumber([4, 1, 2, 1, 2]));
