function findOutlier(integers){
    for(var i = 2;i < integers.length;i++)
    {
        const odds = integers.filter(x => x % 2 != 0);
        const evens = integers.filter(x => x % 2 === 0);
        return odds.length === 1 ? odds[0] : evens[0];
    }
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));