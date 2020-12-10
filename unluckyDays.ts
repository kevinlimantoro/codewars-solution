export function unluckyDays(year: number): number {
    var res = 0
    for(var i = 0;i<12;i++)
    {
        if(new Date(year,i,13).getDay() === 5)
            res++;
    }
    return res;
}


console.log(unluckyDays(2015));