export const orderedCount = (text: string): [string, number][] => text.split('').reduce((total: any,current) => {
        var idx = total.findIndex((x : [string,number]) => x[0] === current);
        if(idx > -1) 
            total[idx][1]++;
        else
            total.push([current,1]);
        return total;
    },[] as [string,number][]);
  
  console.log(orderedCount('abracadabra'));