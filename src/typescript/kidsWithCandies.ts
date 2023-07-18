function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const kidsWithGreatestCandies: boolean[] = [];
  // loop over the candies
  for (let i = 0; i < candies.length; i++) {
    // add kid's candies with extraCandies
    const addedCandies = candies[i] + extraCandies;

    // check if it is higher than other kid's candies
    if (Math.max(addedCandies, ...candies) === addedCandies) {
      kidsWithGreatestCandies.push(true);
    } else kidsWithGreatestCandies.push(false);
  }

  /* solution i saw from leetcode
  const maxNumber: number = Math.max(...candies);
  return candies.map((el) => el + extraCandies >= maxNumber); */
  return kidsWithGreatestCandies;
}

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
console.log(kidsWithCandies([12, 1, 12], 10));
