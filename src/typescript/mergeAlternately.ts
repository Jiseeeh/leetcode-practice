function mergeAlternately(word1: string, word2: string): string {
  let merged = "";

  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (!word1[i]) merged += word2[i];
    else if (!word2[i]) merged += word1[i];
    else {
      merged += `${word1[i]}${word2[i]}`;
    }
  }

  /**
   * solution i saw (this ok) mine look sht
   * if(i < word1.length) merged += word1[i];
   * if (i <word2.length) merged += word2[i];
   */
  return merged;
}

mergeAlternately("abc", "pqr");
mergeAlternately("ab", "pqrs");
mergeAlternately("abcd", "pq");
