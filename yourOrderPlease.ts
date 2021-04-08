const order=(words:string) :string => words.split(' ').sort((x,y) => +x.match(/\d/g)![0] - +y.match(/\d/g)![0]).join(' ');

  console.log(order("is2 Thi1s T4est 3a"));