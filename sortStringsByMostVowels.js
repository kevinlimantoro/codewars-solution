function sortStringsByVowels(strings){
    const r = new RegExp('[aiueoAIUEO]+','g');
    const maxVowelsLength = (str) => (str.match(r) || []).reduce((t,c) => t = Math.max(t,c.length),0);
    return strings.sort((a,b) => maxVowelsLength(b) - maxVowelsLength(a));
}


console.log(sortStringsByVowels([ 'aaa', 'i', 'uuuuu' ]))