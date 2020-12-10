solve = a => a.reduce((t,c) => t += c % 2 === 0 ? 1 : c % 2 === 1 ? -1 :0,0);

  console.log(solve([0,1,2,3,'a','b']));