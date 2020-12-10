const total = (arr) => arr.filter((v,i) => i > 1 && factors(i) === 0).reduce((total,current)=>total+=current,0)


const factors = n => {
    let res = 0;
    for(let i = 2; i <= Math.sqrt(n); i++)
      if(n % i === 0) i === n/i ? res+= i : res += i + n/i
    return res;
}

console.log(total([1,2,3,4]));
console.log(total([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));