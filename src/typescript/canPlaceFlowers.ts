function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let newFlowers = n;

  for (let i = 0; i < flowerbed.length; i++) {
    if (newFlowers === 0) break;
    
    // check if current, left, and right is free
    if (
      flowerbed[i] === 0 &&
      flowerbed[i - 1] !== 1 &&
      flowerbed[i + 1] !== 1
    ) {
      flowerbed[i] = 1;
      newFlowers--;
    }
  }

  // if all newFlowers were placed, it means the flowerBed can place n flowers
  return newFlowers === 0;
}

// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
// console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1));
console.log(canPlaceFlowers([0, 0, 1, 0, 0], 1));
// console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2));
