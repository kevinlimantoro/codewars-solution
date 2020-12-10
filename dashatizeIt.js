dashatize = (num) => {
    var isOdd = false;
    return [...Math.abs(num).toString()].map((x, i, base) => {
        var prevOdd = isOdd;
        isOdd = !!(x % 2);
        return i > 0 ? (isOdd || prevOdd !== isOdd ? '-' : '') + x : x;
    }).join('');
}

function dashatize2(num) {
    return String(num)
        .replace(/([13579])/g, "-$1-")
        .replace(/--+/g, "-")
        .replace(/(^-|-$)/g, "")
}

function dashatize3(num) {
    return isNaN(num) ? 'NaN' : num.toString().match(/([13579]|[02468]+)/g).join('-');
};

console.log(dashatize(274));
console.log(dashatize(5311));
console.log(dashatize(86320));
console.log(dashatize(974302));
console.log(dashatize(NaN));
console.log(dashatize(0));
console.log(dashatize(-1));
console.log(dashatize(-28369));