function compress(chars: string[]): number {
  let curr = chars[0],
    count = 0,
    s = "";

  for (let i = 0; i < chars.length + 1; i++) {
    if (chars[i] === curr) {
      count++;
    } else {
      if (count === 1) s += curr;
      else s += `${curr}${count}`;

      curr = chars[i];
      count = 1;
    }
  }

  const compressed = s.split("");

  for (let i = 0; i < compressed.length; i++) {
    chars[i] = compressed[i];
  }

  return compressed.length;
}
console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));

console.log(compress(["a"]));

console.log(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
);
