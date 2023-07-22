/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length > t.length) return false;

  let currIndex = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[currIndex] === t[i]) {
      currIndex++;
    }
  }

  return s.length === currIndex;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
