const zero = (val) => process('0' + (val || ''));
const one = (val) => process('1' + (val || ''));
const two = (val) => process('2' + (val || ''));
const three = (val) => process('3' + (val || ''));
const four = (val) => process('4' + (val || ''));
const five = (val) => process('5' + (val || ''));
const six = (val) => process('6' + (val || ''));
const seven = (val) => process('7' + (val || ''));
const eight = (val) => process('8' + (val || ''));
const nine = (val) => process('9' + (val || ''));

const plus = (val) => process('+' + (val || ''));
const minus = (val) => process('-' + (val || ''));
const times = (val) => process('*' + (val || ''));
const dividedBy = (val) => process('/' + (val || ''));

function process(val){
    if(val.length < 3)
        return val;
    val = val.split('').map(x => isNaN(parseInt(x)) ? x : parseInt(x));
    switch(val[1]){
        case '+':
            return Math.floor(val[0] + val[2]);
        case '-':
            return Math.floor(val[0] - val[2]);
        case '*':
            return Math.floor(val[0] * val[2]);
        case '/':
            return Math.floor(val[0] / val[2]);
    }
}

console.log(one(plus(two(times(four())))));