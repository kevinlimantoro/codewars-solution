function persistence(num) {
    var times = 0;
    while(num >= 10){
      num = num.toString().split('').reduce((a,b) => a * b);
      times++;
    }
    return times;
  }

  console.log(persistence(29));
  console.log(persistence(39));