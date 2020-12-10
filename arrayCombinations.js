const solve = (arr)  => arr.reduce((t,c) => 
       t * new Set(c).size 
    ,1);

  console.log(solve([[1,2],[4],[5,6]]));