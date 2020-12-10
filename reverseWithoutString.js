const reverse = (n) => n === 0 ? 0 : ((n % 10) * Math.pow(10,parseInt(Math.log10(n)))) + reverse(parseInt(n / 10));

console.log(reverse(1020));