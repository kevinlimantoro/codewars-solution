function digPow(n, p){
    var origin = p;
    var arr = n.toString().split('');
    var res = arr.reduce((total,current) => {
        total += Math.pow(current,p++);
        return total;
    },0);
    return res / n === origin ? res/n : -1;
  }

  console.log(digPow(89,1));