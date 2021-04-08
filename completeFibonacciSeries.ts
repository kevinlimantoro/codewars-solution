var fibonacci = (n : number) => {
  var x = 0;
  var f = [];
  for (var i = 0; i < n; i++) {
    if (i < 2) {
      f.push(x++);
    } else {
      var cur : number = f[i - 2] + f[i - 1];
      f.push(cur);
      x = cur;
    }
  }
  return f;
};

console.log(fibonacci(6));
console.log(fibonacci(13));
console.log(fibonacci(5));
console.log(fibonacci(0));
console.log(fibonacci(1));
