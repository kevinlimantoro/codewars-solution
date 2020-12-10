export function cleanString(s: string) {
	while(!!s.match(/[^#]#/g))
	{
		s = s.replace(/[^#]#/g,'');
	}
	return s.replace(/#/g,'');
}


console.log(cleanString('####'));

console.log(cleanString('ac##b#ccc#d'));