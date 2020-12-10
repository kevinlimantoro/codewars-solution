multiplicationTable = function(size) {
    const base = [...Array(size).keys()].map(x => x + 1);
    return base.map(x => base.map(y => y * x));
  }

  console.log(multiplicationTable(3));