const solve = (s) => { 
    var res = s.split('').reduce((total,current) => {
        switch(true){
            case !isNaN(parseInt(current)):
                total.numbers++;
                break;
            case current.toUpperCase() === current && current === current.toLowerCase():
                total.spec++;
                break;
            case current === current.toUpperCase():
                total.upper++;
                break;
            case current === current.toLowerCase():
                total.lower++;
                break;
        }
        return total;
    },{upper:0,lower:0,numbers:0,spec:0});
    return [res.upper,res.lower,res.numbers,res.spec];
}


  console.log(solve("AAVVvv123+++"));