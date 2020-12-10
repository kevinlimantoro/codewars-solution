function reserve(bookings) {
    tableRepo = {
        "2": {
            name: 'table for two',
            total: 4
        },
        "3": {
            name: 'table for three',
            total: 2
        },
        "4": {
            name: 'table for four',
            total: 2
        },
        "6": {
            name: 'table for six',
            total: 1
        },
        "8": {
            name: "table for eight",
            total: 1
        }
    };
    return bookings.reduce((t, c, i) => {
        if (tableRepo[c] && tableRepo[c].total) {
            t[0].push(tableRepo[c].name);
            tableRepo[c].total--;
        }
        else if (tableRepo[c + 1] && tableRepo[c + 1].total) {
            t[0].push(tableRepo[c + 1].name);
            tableRepo[c + 1].total--;
        }
        else {
            t[1] += (t[1] ? ', ' : 'Bookings at the following indexes were not accepted: ');
            t[1] += i;
        }
        return t;
    }, [[], ""]);
}

console.log(JSON.stringify(reserve([2, 3, 4, 5, 7, 8, 6, 2])) === JSON.stringify([["table for two", "table for three", "table for four", "table for six", "table for eight", "table for two"], "Bookings at the following indexes were not accepted: 5, 6"]));
console.log(JSON.stringify(reserve([])) === JSON.stringify([[], ""]));
console.log(JSON.stringify(reserve([1])) === JSON.stringify([["table for two"], ""]));
console.log(JSON.stringify(reserve([2, 3, 4, 6, 8])) === JSON.stringify([["table for two", "table for three", "table for four", "table for six", "table for eight"], ""]));
console.log(JSON.stringify(reserve([5, 5])) === JSON.stringify([["table for six"], "Bookings at the following indexes were not accepted: 1"]));
console.log(JSON.stringify(reserve([10])) === JSON.stringify([[], "Bookings at the following indexes were not accepted: 0"]));
console.log(JSON.stringify(reserve([4, 4, 10, 3, 3, 3])) === JSON.stringify([["table for four", "table for four", "table for three", "table for three"], "Bookings at the following indexes were not accepted: 2, 5"]));