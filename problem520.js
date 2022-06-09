"use strict";
/*
520. Detect Capital
We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Given a string word, return true if the usage of capitals in it is right.

 

Example 1:
Input: word = "USA"
Output: true

Example 2:
Input: word = "FlaG"
Output: false 

Constraints:
1 <= word.length <= 100
word consists of lowercase and uppercase English letters.

*/

const detectCapitalUse = function (word) {
  let capitalCount = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] == word[i].toUpperCase()) {
      capitalCount++;
    }
  }

  if (
    capitalCount == word.length ||
    capitalCount == 0 ||
    (capitalCount == 1 && word[0] == word[0].toUpperCase())
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(detectCapitalUse("uSa"));
