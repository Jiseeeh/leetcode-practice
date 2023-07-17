function gcdOfStrings(str1: string, str2: string): string {
  if (str1.length > str2.length && str1.substring(0, str2.length) === str2) {
    return gcdOfStrings(str1.slice(str2.length), str2);
  } else if (
    str1.length < str2.length &&
    str2.substring(0, str1.length) === str1
  ) {
    return gcdOfStrings(str1, str2.slice(str1.length));
  } else if (str1.length === str2.length && str1 === str2) {
    return str1;
  }

  return "";
}

console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("ABABAB", "ABAB"));
console.log(gcdOfStrings("LEET", "CODE"));
