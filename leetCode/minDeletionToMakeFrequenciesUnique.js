/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
    return s.split('').reduce((t, c) => {
        if(t[c]){
            t[c]++;
        }else{
            t[c] = 1;
        }
        return t;
    }, []).sort(a);
};

console.log(minDeletions('aaabbbcc'));