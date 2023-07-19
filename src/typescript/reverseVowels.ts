function reverseVowels(s: string): string {
  let start = 0,
    end = s.length - 1;

  const letters = [...s];
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  while (start < end) {
    // if start  not vowel, move it

    if (!vowels.has(letters[start])) {
      start++;
    }

    // if end not vowel move it
    if (!vowels.has(letters[end])) {
      end--;
    }

    // if both vowel swap
    if (vowels.has(letters[start]) && vowels.has(letters[end])) {
      let temp = letters[start];

      letters[start] = letters[end];
      letters[end] = temp;

      start++;
      end--;
    }
  }

  return letters.join("");
}

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));
console.log(reverseVowels("zero two"));
