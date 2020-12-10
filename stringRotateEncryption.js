const rotateRight = (s,total) => s.substring(s.length - (total > s.length ? total % s.length : total)) + s.substring(0, s.length - (total > s.length ? total % s.length : total));
const rotateLeft = (s,total) => s.substring(total > s.length ? total % s.length : total) + s.substring(0, (total > s.length ? total % s.length : total));

const encrypt = (total, s) => {
    for(i = 0;i<total;i++){
        var regex = / /gi, result, indices = [];
        while ((result = regex.exec(s)) ) {
            indices.push(result.index);
        }
        s = s.split(' ').join('');
        s = rotateRight(s,total);
        indices.forEach(idx => {
            s = s.slice(0,idx) + ' ' + s.slice(idx);
        });
        s = s.split(' ').map(x => rotateRight(x,total)).join(' ');
    }
    return total + ' ' + s;
}

const decrypt = (s) => {
    var total = parseInt(s.split(' ')[0]);
    s = s.substring(s.indexOf(' ') + 1);
    for(i = 0; i < total;i++){
        var regex = / /gi, result, indices = [];
        while ((result = regex.exec(s)) ) {
            indices.push(result.index);
        }
        s = s.split(' ').map(x => rotateLeft(x,total)).join(' ');
        s = s.split(' ').join('');
        s = rotateLeft(s,total);
        indices.forEach(idx => {
            s = s.slice(0,idx) + ' ' + s.slice(idx);
        });
    }
    return s;
}
console.log("RIGHT");
console.log(rotateRight('abcd',1));
console.log(rotateRight('abcd',2));
console.log(rotateRight('abcd',3));
console.log(rotateRight('abcd',4));
console.log(rotateRight('abcd',5));
console.log(rotateRight('abcd',6));

console.log("LEFT");
console.log(rotateLeft('abcd',1));  // bcda
console.log(rotateLeft('abcd',2));  // cdab
console.log(rotateLeft('abcd',3));
console.log(rotateLeft('abcd',4));
console.log(rotateLeft('abcd',5));
console.log(rotateLeft('abcd',6));

console.log(decrypt(encrypt('If you wish to make an apple pie from scratch, you must first invent the universe.',10)));