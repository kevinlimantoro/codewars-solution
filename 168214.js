function add(num1, num2) {
    let { shorter,longer } = num1 < num2 ? { shorter: num1.toString(), longer:num2.toString() } : { shorter: num2.toString(), longer:num1.toString() };
    return parseInt([...longer].reduce((t,c,i) => {
        var lengthGap = i - (longer.length - shorter.length)
        t += (parseInt(c) + parseInt(lengthGap < 0 ? '0' : shorter[lengthGap])).toString();
        return t;
    },''));
  }


  console.log(add(248,208))
  console.log(add(248,2080))