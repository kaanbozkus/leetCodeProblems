"use strict";
/*
42. Trapping Rain Water
HARD
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9
 

Constraints:
n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105

*/

/* *********************************************NAIVE SOLUTION********************************************* */
/*
const findLeftMax = function (arr, index) {
  if (index == 0) return 0;
  let leftMax = arr[0];
  for (let i = 1; i < index; i++) {
    leftMax = arr[i] > leftMax ? arr[i] : leftMax;
  }
  return leftMax;
};

const findRightMax = function (arr, index) {
  if (index == arr.length - 1) return 0;
  let rightMax = arr[arr.length - 1];
  for (let i = arr.length - 2; i > index; i--) {
    rightMax = arr[i] > rightMax ? arr[i] : rightMax;
  }
  return rightMax;
};

const trap = function (height) {
  let waterInside = 0;
  for (let i = 1; i < height.length - 1; i++) {
    let waterOnTop =
      Math.min(findLeftMax(height, i), findRightMax(height, i)) - height[i];
    waterInside += waterOnTop > 0 ? waterOnTop : 0;
  }
  return waterInside;
};

console.log(trap([4, 1, 0, 7, 8, 4, 1, 5, 6, 1, 5, 4, 3, 9, 2]));
*/

/* *********************************************BETTER SOLUTION********************************************* */

/* 
LET LEFT WALL = HEIGHT[0]
LET RIGHT WALL = HEIGHT[LAST]

WHILE LEFT POINTER < RIGHT POINTER
IDENTIFY WHICH WALL IS SMALLER (SMALLER WALL DETERMINES THE CONTAINER)

IF LEFT , 
IS LEFT WALL IS HIGHER THAN THEN CURRENT VALUE? 
IF SO ADD THE WATER TO SUMMATION (LEFTWALL-CURRENT VALUE) MOVE THE POINTER INSIDE
IF LEFT WALL IS NOT  HIGHER THAN THEN CURRENT VALUE, ASSIGN IT AS NEW LEFT WALL

SAME AS FOR RIGHT 

*/

const trap = function (height) {
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let totalWaterInside = 0;

  while (leftPointer < rightPointer) {
    if (height[leftPointer] <= height[rightPointer]) {
      if (height[leftPointer] > leftMax) {
        leftMax = height[leftPointer];
        leftPointer++;
      } else {
        totalWaterInside += leftMax - height[leftPointer];
        leftPointer++;
      }
    } else {
      if (height[rightPointer] > rightMax) {
        rightMax = height[rightPointer];
        rightPointer--;
      } else {
        totalWaterInside += rightMax - height[rightPointer];
        rightPointer--;
      }
    }
  }
  return totalWaterInside;
};

console.log(trap([4, 2, 0, 3, 2, 5]));
