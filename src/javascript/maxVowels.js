/**
 * NOTES:
 * algo: sliding window
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let maxVowels = 0;

  for (let i = 0; i < k; i++) {
    if (isVowel(s[i])) maxVowels++;
  }
  let windowVowel = maxVowels;

  for (let end = k; end < s.length; end++) {
    let start = end - k;

    if (isVowel(s[end])) {
      windowVowel++;
    }

    if (isVowel(s[start])) {
      windowVowel--;
    }

    maxVowels = Math.max(maxVowels, windowVowel);
  }

  return maxVowels;
};

const isVowel = (char) => {
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    return true;
  }
  return false;
};

console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("leetcode", 3));
