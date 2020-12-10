isItPossible = (field) => {
    var total = [...field].reduce((t, c) => { t[c]++; return t; }, { 'X': 0, '0': 0, '_': 0 });
    var Xwins = countWinning(field, 'X');
    var Owins = countWinning(field, '0');
    if (Xwins + Owins > 1 && (Xwins + Owins != Xwins)) //Only X can double win, hence total winning can only be 1 or 2(X double win)
        return false;
    else if (Xwins > 0 && total['X'] - total['0'] != 1) // If x win game stops right away, leaving 0 total 1 behind
        return false;
    else if (Owins > 0 && total['X'] - total['0'] != 0) // If 0 win game stops right away, total of both is the same
        return false;
    else if (total['X'] - total['0'] < 0 || total['X'] - total['0'] > 1) // Either total is same or total X is more by 1 point
        return false;
    return true;
}

countWinning = (field, sign) => {
    var winningField = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    return winningField.reduce((t, pos) => t += (pos.every(x => field[x] === sign) ? 1 : 0), 0);
}

console.log(isItPossible("XXX" +
    "XXX" +
    "XXX") === false);
console.log(isItPossible("0XX" +
    "XX0" +
    "00X") === true);
console.log(isItPossible("XXX" +
    "0_0" +
    "___") === true);
console.log(isItPossible("___" +
    "___" +
    "___") === true);
console.log(isItPossible("__0" +
    "___" +
    "___") === false);
console.log(isItPossible("___" +
    "_X_" +
    "___") === true);
console.log(isItPossible("XXX" +
    "000" +
    "___") === false);
console.log(isItPossible("0X_" +
    "0X0" +
    "_X_") === false);
console.log(isItPossible("0X0" +
    "0X0" +
    "__X") === false);
console.log(isItPossible("XX_" +
    "X_X" +
    "000") === false);
console.log(isItPossible("X00" +
    "0X0" +
    "XXX") === true);
console.log(isItPossible("X_0" +
    "0X0" +
    "XX0") === true);