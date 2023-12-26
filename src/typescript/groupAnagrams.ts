function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");
    if (map.has(sortedStr)) {
      map.get(sortedStr)?.push(str);
    } else {
      map.set(sortedStr, [str]);
    }
  }

  return [...map.values()];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams(["ate", "eat", "tea"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["", ""]));
