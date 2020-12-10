

function findMaxInterval(times)
{
    times.sort();
    return times.reduce((m,c,i) => {
        const next = i === times.length - 1 ? 0 : i + 1;
        
    },'');
}

console.log(findMaxInterval([ '23:00', '04:22', '18:05', '06:24' ]));