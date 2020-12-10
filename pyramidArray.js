const pyramid = (n) => [...Array(n).keys()].map(x => [...Array(x + 1)].fill(1));
const pyramid2 = n => Array.from(Array(n), (_, i) => Array(i + 1).fill(1));

console.log(pyramid(0));
console.log(pyramid(1));
console.log(pyramid(2));
console.log(pyramid(3));