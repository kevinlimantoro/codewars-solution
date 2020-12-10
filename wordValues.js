function wordValue(arr) {
    var totalString = (s) => [...s].reduce((t,c) => t += (parseInt(c,36) - 9) ,0);
    return arr.map((x, i) => (x.match(/[a-z]+/gi) || []).reduce((t,c) => t += totalString(c),0) * ++i);
  }

  console.log(wordValue(['abc', 'abc abc']));