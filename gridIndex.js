gridIndex = (grid, indices) =>
     indices.reduce((t,c) => 
        t += grid[Math.floor((c - 1) / grid.length)][(c - 1) % grid.length],'');


console.log(gridIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 5, 6]));
console.log(gridIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 3, 7, 8]));
console.log(gridIndex([['h', 'e', 'l', 'l'], ['o', 'c', 'o', 'd'], ['e', 'w', 'a', 'r'], ['r', 'i', 'o', 'r']], [5, 7, 9, 3, 6, 6, 8, 8, 16, 13]));