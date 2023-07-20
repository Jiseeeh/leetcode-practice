function reverseWords(s: string): string {
  s = s.replace(/\s+/g, " ").trim();

  return s.split(" ").reverse().join(" ");
}

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));
console.log(reverseWords("verdant     fields    "));
