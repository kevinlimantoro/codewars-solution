export function mostFrequentDays(year: number): {} {
    var date = new Date(year,1,1);
    var res : any = {};
    var max = 0;
    var skip = false;
    var daysName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    while(date.getFullYear() != year + 1){
        const dayName = daysName[date.getDay()];
        if(!!res[dayName]){
            const value = res[dayName]+1;
            res[dayName] = value;
            max = Math.max(max,value);
        }
        else {
            res[dayName] = 1;
        }

        date.setDate(date.getDate() + 1);
    }
    console.log(max);
    const sortedDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    const sortedRes = Object.keys(res).sort((a,b) => sortedDays.indexOf(a) - sortedDays.indexOf(b)).reduce((total:any,current:string)=>{
        if(res[current] === max && (!skip || !total.length))
            total.push(current);
        else
            skip = true;
        return total;
    },[]);
    return sortedRes;
}

console.log(mostFrequentDays(2000));
console.log(mostFrequentDays(2001));