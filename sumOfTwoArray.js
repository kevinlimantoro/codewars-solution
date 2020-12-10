addArrays = (array1, array2) => {
    let total = (parseInt(array1.join('')) || 0) + (parseInt(array2.join('')) || 0);
    return array1.length === 0 && array2.length === 0 ? [] : Math.abs(total).toString().split('').map((x, i) => parseInt(x) * (i === 0 ? Math.sign(total) : 1));
}

const addArrays2 = (arr1, arr2) => (arr1.length || arr2.length) ? `${(+arr1.join`` + +arr2.join``)}`.match(/-?\d/g).map(Number) : []
const funct = (t) => { console.log(t); }
console.log(addArrays([3, 2, 9], [1, 2]));
console.log(addArrays([-7, 7], [-7, 7]));
console.log(addArrays([], []));
console.log(addArrays([6, 7], []));

funct`1`;
funct`2`;