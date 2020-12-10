const sumOfDigits = (from,to) =>
[...Array(to + 1).keys()].filter(x => x >= from).reduce((t,x) => t + x.toString().split('').filter(x => x !== '0').reduce((t2,x2) => t2 + parseInt(x2),0),0);

const sumOfDigits2 = (from,to)  =>
{ 
    var result = 0;
    for (var x = from; x <= to; x++) 
        result += sumOfDigitsInX(x); 
  
    return result; 
} 
  
const sumOfDigitsInX = (x) =>
{ 
    var sum = 0; 
    while (x != 0) 
    { 
        sum += parseInt(x % 10); 
        x   = parseInt(x /10); 
    } 
    return sum; 
} 
console.log(sumOfDigits(14,112));
// console.log(sumOfDigits(1,10000000))
console.log(sumOfDigits2(14,112));
console.log(sumOfDigits2(1,10000000))