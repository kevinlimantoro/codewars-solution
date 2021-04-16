function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    var nums3 = [...nums1,...nums2].sort((a:number,b:number) => a-b);
    console.log("🚀 ~ file: medianOfTwoArray.ts ~ line 3 ~ findMedianSortedArrays ~ nums3", nums3)
    var midPoint = (nums3.length / 2);
    if(midPoint % 1 > 0){
        return nums3[Math.floor(midPoint)];
    }else {
        return (nums3[midPoint-1] + nums3[midPoint])/2;
    }
};

console.log(findMedianSortedArrays([1,3],[2,4]));
console.log(findMedianSortedArrays([1,3],[2]));
console.log(findMedianSortedArrays([3],[-1,-2]));