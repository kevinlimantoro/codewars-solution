const getStrings = (city) => city.toLowerCase().replace(/ /g, '').split('').reduce((r,x) => {
        if(r.indexOf(`${x}:`) > -1)
        {
            r = r.replace(`${x}:`,`${x}:*`);
        }
        else
        {
            r += `${x}:*,`;
        }
        return r;
    },'').replace(/(^,)|(,$)/g, "");


  console.log(getStrings('Chicago'));