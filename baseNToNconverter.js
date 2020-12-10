countDigits = (number,digit,base = 10, from_base = 0) => --(parseInt(number,from_base).toString(base).split(digit).length);
console.log(countDigits(133,3));
console.log(countDigits('10','a',11));
console.log(countDigits("1100101110101", "d", 15, 2));