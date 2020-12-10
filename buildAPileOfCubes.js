function findNb(m) {
    var total = 0;
    var current = 1;
    while(total < m){
        total += Math.pow(current,3);
        current++;
    }
    return total === m ? current - 1 : (-1);
}

console.log(findNb(4183059834009));