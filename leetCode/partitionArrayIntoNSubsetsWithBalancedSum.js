function balance(A, n) {
  let total = 0;
  for (let i = 0; i < A.length; i++) {
    total += A[i]
  }

  const target = total / n
  const result = [];
  for (let i = 0; i < n; i++) {
    const bucket = getBucket(A, target)
    result.push(bucket)
  }

  return result
}

function getBucket(A, target) {
  const last = A.pop();
  let sum = last;
  const result = [last]

  if (A.length === 0) return result

  let cursor = 0
  while (sum <= target && cursor < A.length) {
    if (sum + A[cursor] <= target) {
      const [elem] = A.splice(cursor, 1)
      result.push(elem)
      sum += elem
    } else {
      cursor++
    }
  }

  return result
}

console.log(balance([1, 2, 3, 4, 5], 3))
console.log(balance([10, 2, 9, 9, 10], 2))
console.log(balance([1, 2, 2, 3, 3, 5], 4))
console.log(balance([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 5))

/**
* @param {number[]} nums
* @param {number} k
* @return {boolean}
*/
var canPartitionKSubsets = function (nums, k) {
  var t = 0;
  for (let i = 0; i < nums.length; i++)
    t += nums[i];
  var target = t / k;
  var res = [];
  for (i = 0; i < k; i++) {
    res.push(getSubset(nums, target));
  }
  console.log(res);
  return res.every(x => x.reduce((tc, x) => tc += x, 0) === target);
};

var getSubset = (nums, target) => {
  var largest = nums.pop();
  var res = [largest]
  if (nums.length === 0)
    return res;
  var sum = largest;
  var i = 0
  while (target >= sum && i < nums.length) {
    if (sum + nums[i] <= target) {
      var [item] = nums.splice(i, 1)
      res.push(item);
      sum += item;
    } else
      i++;
  }
  return res;
}


console.log(canPartitionKSubsets([1, 2, 3, 4, 5], 3))
console.log(canPartitionKSubsets([10, 2, 9, 9, 10], 2))
console.log(canPartitionKSubsets([1, 2, 2, 3, 3, 5], 4))
console.log(canPartitionKSubsets([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 5))

