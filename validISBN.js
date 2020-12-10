validISBN10 = (i) => 
/\d{9}[\d|X]$/gi.test(i) &&
!([...i].reduce((t,c,i) => t += parseInt(/x/gi.test(c) ? 10 : c) * ++i,0) % 11);

console.log(validISBN10('1112223339'));
console.log(validISBN10('1234554321'));
console.log(validISBN10('1234512345'));
console.log(validISBN10('ABCDEFGHIJ'));
console.log(validISBN10('XX'));
console.log(validISBN10('1293'));
console.log(validISBN10('1293'));
