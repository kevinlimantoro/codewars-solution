function getNthOf47(n)
{
    var res = Array(n+1).fill(0);
    res[1]=4;
    res[2]=7;
    for(i = 3;i <= n;i++){
        if (i % 2 != 0){
            res[i] = res[Math.floor(i / 2)] * 10 + 4;
        }
        else
            res[i] = res[(Math.floor(i / 2)) - 1] * 10 + 7;
    }
    return res[n];
}

// 4
// 7
// 44
// 47
// 74
// 77
// 444
// 447
// 474
// 477
// 744
// 747
// 774
// 777
// 4444
// 4447


console.log(getNthOf47(1))
console.log(getNthOf47(2))
console.log(getNthOf47(3))
console.log(getNthOf47(4))
console.log(getNthOf47(11))
console.log(getNthOf47(12))