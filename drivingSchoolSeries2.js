const cost = (mins) => {
    var extraTime = mins - 60;
    return 30 + Math.max((Math.trunc((extraTime) / 30) + (extraTime % 30 > 5 ? 1 : 0)) * 10,0);
  }

  console.log(cost(45));
  console.log(cost(63));
  console.log(cost(84));
  console.log(cost(102));
  console.log(cost(273));