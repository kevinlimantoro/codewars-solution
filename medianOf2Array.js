/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var total = [...nums1,...nums2].sort((a,b) => a - b);
    console.log("findMedianSortedArrays -> total", total)
    if(total.length % 2 === 1)
        return total[Math.floor(total.length/2)];
    else
        return (total[(total.length/2)] + total[(total.length/2) - 1]) / 2;
};

console.log(findMedianSortedArrays([1,2],[3]));
console.log(findMedianSortedArrays([1,2],[3,4]));
console.log(findMedianSortedArrays([1,3],[2]));

