"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanString = void 0;
function cleanString(s) {
    while (!!s.match(/[^#]#/g)) {
        s = s.replace(/[^#]#/g, '');
    }
    return s.replace(/#/g, '');
}
exports.cleanString = cleanString;
console.log(cleanString('####'));
console.log(cleanString('ac##b#ccc#d'));
