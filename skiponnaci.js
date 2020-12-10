function skiponacci(n) {
    var previous = 1;
    var now = 1;
    var temp;
    var res = [];
    res.push(now);
    while(res.length < n){
      res.push(now);
      temp = now;
      now = previous + now;
      previous = temp;
    }
    return res.map((v,i) => i % 2 > 0 ? ' skip ' : v).join('');
  }

  console.log(skiponacci(7));