"use strict";
/*
844. Backspace String Compare
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
Note that after backspacing an empty text, the text will continue empty. 

Example 1:
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

Example 3:
Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b". 

Constraints:
1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters. 

Follow up: Can you solve it in O(n) time and O(1) space?
*/

/* ************************* NAIVE SOLUTION ************************* */

const builtArray = function (string) {
  let array = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] != "#") {
      array.push(string[i]);
    } else {
      array.pop();
    }
  }
  return array;
};

const backspaceCompare = function (s, t) {
  if (builtArray(s).join("") == builtArray(t).join("")) {
    return true;
  }

  return false;
};

/* ************************* BETTER SOLUTION ************************* */
// to be continued.
