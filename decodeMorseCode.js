var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var morsecode =[
    '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....',
    '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.',
    '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-',
    '-.--', '--..'
  ];
var MORSE_CODE = [];
var length = abc.length;
for(var i = 0;i < length;i++){
	MORSE_CODE[morsecode[i]] = abc[i];
}

decodeMorse = function(morseCode){
    morseCode = morseCode.trimStart().trimEnd().split('   ');
    return morseCode.map(element => {
        var res = element.trimStart().split(' ').map(x => MORSE_CODE[x]);
        return [...res].join('');
    }).join(' ');
  }

 
let decodeBits = function(bits){
    bits = bits.replace(/^0+|0+$/g, '')
    let transmisisonRate = getTransmissionRate(bits)
    let result = ''
    let prev = 1
    let count = 0
    
    for (let i = 0; i < bits.length; i++) {
      let bit = Number(bits[i])
      if (bit === prev) count++
      else {
        result += addMorseCode(transmisisonRate, prev, count)
        count = 1
        prev = bit
      }
      
      if (i === bits.length - 1) {
       result += addMorseCode(transmisisonRate, prev, count)
      }
    }
    return result
  }
  
  let addMorseCode = function (transmisisonRate, prev, count) {
    if (prev === 1) return (count / transmisisonRate === 1) ? '.' : '-'
    else if (prev === 0) {
      if (count / (transmisisonRate * 3) === 1) return ' '
      else if (count / (transmisisonRate * 7) === 1) return '   '
      else return ''
    }
  }
  
  let getTransmissionRate = function (bits) {
    let regex = /(1+)(0+)?/g
    let ones = new Set()
    let zeros = new Set()
    
    match = regex.exec(bits)
    while (match != null) {
      ones.add(match[1].length)
      if(match[2]) zeros.add(match[2].length)
      match = regex.exec(bits)
    }
    
    return Math.min(Math.min.apply(null , [...ones]), Math.min.apply(null , [...zeros]))
  }

  decodeMorseWired = function(binaries) {
    binaries = binaries.split('00000000000000');
    return binaries.map(element => {
        var res = element.split('000000').map(x => {
            var res = x.split('00').map(y => y.length > 2 ? '-' : '.').join('');
            return MORSE_CODE[res];
        });
        return [...res].join('');
    }).join(' ');
  }

console.log(MORSE_CODE);
console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));

console.log(decodeMorseWired('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011'));
console.log(decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011'));