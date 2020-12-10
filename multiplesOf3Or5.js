const solution = (number) => 
[...Array(number < 0 ? 0 : number).keys()].reduce((total,x) => total += (x % 3 === 0 || x % 5 === 0 ? x : 0),0);

console.log(solution(-1));