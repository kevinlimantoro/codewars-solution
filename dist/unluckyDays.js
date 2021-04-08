"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unluckyDays = void 0;
function unluckyDays(year) {
    var res = 0;
    for (var i = 0; i < 12; i++) {
        if (new Date(year, i, 13).getDay() === 5)
            res++;
    }
    return res;
}
exports.unluckyDays = unluckyDays;
console.log(unluckyDays(2015));
