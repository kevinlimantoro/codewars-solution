pairs = (ar) => ar.reduce((t,c,i) => {
        t.total += i % 2 === 1 && Math.abs(c - t.prev) === 1 ? 1 : 0;
        t.prev = c;
        return t;
    },{total:0,prev:null}).total; 

   console.log(pairs([1,2,5,8,-4,-3,7,6,5]));