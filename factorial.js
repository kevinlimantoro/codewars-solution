
function buddy(start,limit) {
    for(let i=start; i<= limit; i++) {
        const factor = factors2(i);
        if(i < factor && i === factors2(factor))
            return [i, factor]
    }
    return 'Nothing';
  }
const factors = number => { 
    var resArr2 = [];
    var resArr = [...Array(Math.ceil(Math.sqrt(number))).keys()].filter(i=> i > 1 && number % i === 0);
    resArr.forEach(x => {
        if(number % x === 0 && x !== number / x)
            resArr2.push(number/x);
    });
    console.log(resArr,resArr2);
    return [...resArr,...resArr2].reduce((t,x) => t += x,0);
}
const factors2 = n => {
    let res = 0;
    for(let i = 2; i <= Math.sqrt(n); i++)
      if(n % i === 0) i === n/i ? res+= i : res += i + n/i
    return res;
}
console.log(factors(48));
console.log(factors2(48));
// console.log(buddy(23,4669));
// console.log(buddy(4952, 6539));
// console.log(buddy(381, 4318));
// console.log(buddy(2382, 3679));