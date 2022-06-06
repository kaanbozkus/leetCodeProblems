/* 125. Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true

Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:
1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.

Given a string s, return true if it is a palindrome, or false otherwise.

*/

/* ----------PSEUDOCODE----------

Sanitize input string by removing non alphanumeric characters and lowercasing it.

Create a left and right pointer, initially at start and end of string.

While left less than right
if characters at left and right pointer are not equal, return false
return true

*/
const isPalindrome = function (s) {
  const regex = /[^A-Za-z0-9]/g;
  const newStr = s.replace(regex, "").toLowerCase();
  // console.log(newStr);

  let leftPointer = 0;
  let rightPointer = newStr.length - 1;
  while (leftPointer < rightPointer) {
    if (newStr[leftPointer] != newStr[rightPointer]) {
      return false;
    }
    leftPointer++;
    rightPointer--;
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
