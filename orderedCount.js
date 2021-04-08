"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderedCount = void 0;
var orderedCount = function (text) { return text.split('').reduce(function (total, current) {
    var idx = total.findIndex(function (x) { return x[0] === current; });
    if (idx > -1)
        total[idx][1]++;
    else
        total.push([current, 1]);
    return total;
}, []); };
exports.orderedCount = orderedCount;
console.log(exports.orderedCount('abracadabra'));
