function solve (arr) {
    // Node 8.1.3 need to deep copy original list before filter
    var tempArr = JSON.parse(JSON.stringify(arr));
    return arr.sort((a,b) => tempArr.filter(y => y === b).length - tempArr.filter(x => x === a).length || (a - b));
  }


function solve2 (arr) {
    var res = arr.sort((a,b) => {
      console.log(a,b);
        return arr.filter(x => x === b).length - arr.filter(x => x === a).length;
    });
    return res;
  }
  console.log(solve([2,3,5,3,7,9,5,3,7]));
  console.log(solve([0, 0, 4, 4, 9, 9, 3, 5, 7, 8]));
