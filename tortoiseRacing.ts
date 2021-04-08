const race = (v1: number, v2: number, g: number): any => {
  var t = (g / (v2 - v1)) * 3600;
  console.log(t);
  return v1 < v2
    ? [Math.floor(t / 3600), Math.floor((t % 3600) / 60), Math.floor(t % 60)]
    : null;
};
console.log(race(720, 850, 70));
