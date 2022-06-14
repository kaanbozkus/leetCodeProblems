/*
367. Valid Perfect Square
Given a positive integer num, write a function which returns True if num is a perfect square else False.
Follow up: Do not use any built-in library function such as sqrt. 

Example 1:
Input: num = 16
Output: true

Example 2:
Input: num = 14
Output: false
 
Constraints:
1 <= num <= 2^31 - 1


******************************************NAIVE SOLUTION******************************************
const isPerfectSquare = function (num) {
  let start = 1;
  let square = 1;

  while (square <= num) {
    square = start * start;
    start++;
    if (square == num) {
      return true;
    }
  }
  return false;
};

console.log(isPerfectSquare(16));

*/

// ******************************************BETTER SOLUTION******************************************

const isPerfectSquare = function (num) {
  if (num < 2) return true;
  let left = 1;
  let right = num;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (mid * mid == num) {
      return true;
    } else if (mid * mid > num) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return false;
};

console.log(isPerfectSquare(100));
