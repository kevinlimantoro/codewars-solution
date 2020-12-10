function martingale(bank, outcomes)
{
    var res = outcomes.reduce((t,c) => {
        if(c === 1){
            t.balance += (t.multiplier * t.stake);
            t.multiplier = 1;
        }
        else {
            t.balance -= (t.multiplier * t.stake);
            t.multiplier *= 2;
        }
        return t;
    },{balance:bank,stake:100,multiplier:1});
    return res.balance;
}

console.log(martingale(1000,[1,1,0,0,1]));
console.log(martingale(500,[]));