maxMinArray = (arr) => {
    var res = [];
    arr.sort((a,b) => a - b);
    while(!!arr.length){
        res.push(res.length % 2 === 0 ? arr.pop() : arr.shift());
    }
    return res;
};

maxMinArray =  arr =>
[...Array(arr.sort((a, b) => a - b).length)].map((_, idx) => idx % 2 ? arr.shift() : arr.pop());

console.log(maxMinArray([15,11,10,7,12]));