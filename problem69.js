/* 69. Sqrt(x)

Given a non-negative integer x, compute and return the square root of x.
Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5. 

Example 1:
Input: x = 4
Output: 2

Example 2:
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.

*/

const mySqrt = function (x) {
  let leftPointer = 1;
  let rightPointer = x;

  if (x < 2) return x;

  while (leftPointer < rightPointer) {
    let midPointer = leftPointer + Math.floor((rightPointer - leftPointer) / 2);

    if (midPointer * midPointer == x) {
      return midPointer;
    } else if (midPointer * midPointer > x) {
      rightPointer = midPointer;
    } else if (midPointer * midPointer < x) {
      leftPointer = midPointer + 1;
    }
  }

  return leftPointer - 1;
};

mySqrt(26);
console.log(mySqrt(82));
