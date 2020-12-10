function dative(word) {
    var nekMatch = word.match(/[eéiíöőüű]/g) || [];
    var nakMatch = word.match(/[aáoóuú]/g) || [];
    return word + 
      (word.lastIndexOf(nekMatch[nekMatch.length - 1]) > word.lastIndexOf(nakMatch[nakMatch.length - 1]) ?
      'nek' : 'nak');
  }

  console.log(dative('ablak'));
  console.log(dative('tükör'));