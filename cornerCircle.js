//https://www.codewars.com/kata/5898761a9c700939ee000011/train/javascript

const cornerCircle = (n) => (n * ((Math.sqrt(2) - 1) / (Math.sqrt(2) + 1))).toFixed(2);
// Rumusnya rumit https://math.stackexchange.com/questions/3702214/what-is-the-radius-of-the-small-circle-inscribed-in-a-square
console.log(cornerCircle(3));

