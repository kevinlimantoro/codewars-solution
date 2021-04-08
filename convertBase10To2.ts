var ToBinary = (input: number) : string => {
    var a : number = 2 ** 3;
    return (input >>> 0).toString(2);
}

console.log(ToBinary(200));
console.log(ToBinary(2));
console.log(ToBinary(10));
console.log(ToBinary(20));