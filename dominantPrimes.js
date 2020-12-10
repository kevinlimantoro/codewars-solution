const total = (start,end) => [...Array(end).keys()].filter(x => x >= start && x > 1 && factors(x) === 0).filter((v,i) => (i + 1) > 1 && factors(i + 1) === 0).reduce((total,current)=>total+=current,0)


const factors = n => {
    let res = 0;
    for(let i = 2; i <= Math.sqrt(n); i++)
      if(n % i === 0) i === n/i ? res+= i : res += i + n/i
    return res;
}

console.log(total(0,10));