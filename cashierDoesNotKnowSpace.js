const getOrder = (input) => [ 'Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich', 'Onionrings', 'Milkshake', 'Coke' ].reduce((t,x) => {
        const r = new RegExp(x,'gi');
        (input.match(r) || []).forEach(y => t.push(x));
        return t;
    },[]).join(' ');
  
  console.log(getOrder('milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza'));