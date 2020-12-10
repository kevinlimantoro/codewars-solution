doubles = (s) => {
    do { 
        s = s.replace(/([a-z])\1{1}/g,'');
    } while(!!s.match(/([a-z])\1{1}/g,''));
    return s;
}

doublesBetter = (s) => 
        s === (x = s.replace(/(.)\1/g,'')) ? s : doublesBetter(x);

var a = 'abbcccdddda';

console.log(a.match(/([a-z])\1{1}/g));
console.log('aca'.match(/([a-z])\1{1}/g));
console.log(a.replace(/([a-z])\1{1}/g,''));

console.log(doubles('abbccddddas'));
console.log(doublesBetter('abbccddddas'));
