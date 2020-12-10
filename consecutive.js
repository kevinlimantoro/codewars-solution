consecutive = (arr, a, b) => [...arr].reduce((t,c,i) =>  t = t || (c == a && arr[i - 1] == b) || (c == b && arr[i - 1] == a),false);

console.log(consecutive([1,3,5,7],3,5));