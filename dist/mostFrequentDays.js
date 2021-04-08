"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostFrequentDays = void 0;
function mostFrequentDays(year) {
    var date = new Date(year, 1, 1);
    var res = {};
    var max = 0;
    var skip = false;
    var daysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    while (date.getFullYear() != year + 1) {
        var dayName = daysName[date.getDay()];
        if (!!res[dayName]) {
            var value = res[dayName] + 1;
            res[dayName] = value;
            max = Math.max(max, value);
        }
        else {
            res[dayName] = 1;
        }
        date.setDate(date.getDate() + 1);
    }
    console.log(max);
    var sortedDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var sortedRes = Object.keys(res).sort(function (a, b) { return sortedDays.indexOf(a) - sortedDays.indexOf(b); }).reduce(function (total, current) {
        if (res[current] === max && (!skip || !total.length))
            total.push(current);
        else
            skip = true;
        return total;
    }, []);
    return sortedRes;
}
exports.mostFrequentDays = mostFrequentDays;
console.log(mostFrequentDays(2000));
console.log(mostFrequentDays(2001));
