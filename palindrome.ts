export const isPalindrome = (a:string,b:string) : boolean => {
    return a.replace(/ /gi,'').split('').reverse().join('') === b.replace(/ /gi,'');
}

console.log(isPalindrome('acrobats','stab orcsa'));