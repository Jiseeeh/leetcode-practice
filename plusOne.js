/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (digits.length === 1) {
    let arr = [];
    let num = String(digits[0] + 1);

    for (const digit of num) {
      arr.push(Number(digit));
    }
    return arr;
  }

  if (!(digits[digits.length - 1] === 9)) {
    digits[digits.length - 1] = digits[digits.length - 1] + 1;
    return digits;
  }

  let num = "";

  for (const digit of digits) num += String(digit);

  return String(Number(num) + 1).split("");
};

console.time("algo");
console.log(
  plusOne([
    5, 2, 2, 6, 5, 7, 1, 9, 0, 3, 8, 6, 8, 6, 5, 2, 1, 8, 7, 9, 8, 3, 8, 4, 7,
    2, 5, 8, 9,
  ])
);

console.timeEnd("algo");

// from leetcode solutions

//
//   @param {number[]} digits
//   @return {number[]}
//
// var plusOne = function(digits) {
//   return (BigInt(digits.join("")) + BigInt(1)).toString().split("");
// };
