const modifiedSum = (a, n) => a.reduce((a,b) => {
    return a + Math.pow(b,n) - b
  },0);

  console.log(modifiedSum([1,2,3],3));

