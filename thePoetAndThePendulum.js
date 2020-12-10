function pendulum(values) {
    const center = Math.ceil(values.length / 2) - 1;
    var res = [];
    values.sort((a, b) => a - b).map((x, i) => res[center + ((i % 2 > 0 ? 1 : -1) * Math.ceil(i / 2))] = x);
    return res;
}

function pendulum2(values) {
    var res = [];
    values.sort((a, b) => a - b).map((x, i) => i % 2 > 0 ? res.push(x) : res.unshift(x));
    return res;
}

console.log(pendulum([-9, -2, -10, -6]));
console.log(pendulum([-3, -6, -7]));
console.log(pendulum([-7, -2, -8, -3, -4]));

console.log(pendulum2([-9, -2, -10, -6]));
console.log(pendulum2([-3, -6, -7]));
console.log(pendulum2([-7, -2, -8, -3, -4]));