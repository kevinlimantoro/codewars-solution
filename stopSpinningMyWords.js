const spinWords = (words) => words.split(' ').map(x => x.length > 4 ? x.split('').reverse().join('') : x).join(' ');

console.log(spinWords('Stop spinning my Words'));