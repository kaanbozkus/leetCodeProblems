/*
3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters. 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.

Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
Constraints:
0 <= s.length <= 5 * 10^4
s consists of English letters, digits, symbols and spaces.

*/

/* ************************** NAIVE SOLUTION ************************** */

/*
const lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;

  let longest = 0;

  for (let pointer1 = 0; pointer1 < s.length; pointer1++) {
    let seenChars = {};
    let currentLength = 0;

    for (let pointer2 = pointer1; pointer2 < s.length; pointer2++) {
      const currentChar = s[pointer2];

      if (!seenChars[currentChar]) {
        currentLength++;
        seenChars[currentChar] = true;
      } else {
        break;
      }
    }
    longest = Math.max(longest, currentLength);
  }

  return longest;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
*/

/* ************************** BETTER SOLUTION ************************** */

const lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;

  const seenChars = {};
  let leftPointer = 0;
  let longest = 0;

  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
    const currentChar = s[rightPointer];

    if (seenChars[currentChar] >= leftPointer) {
      leftPointer = seenChars[currentChar] + 1;
    }

    seenChars[currentChar] = rightPointer;

    longest = Math.max(longest, rightPointer - leftPointer + 1);
  }

  return longest;
};
