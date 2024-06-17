/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    const leftSum = [];
    const rightSum = [];
    nums.forEach((_, idx, arr) => {
        const left = arr.slice(0, idx).reduce((acc, curr) => acc+curr, 0);
        const right = arr.slice(idx+1, arr.length).reduce((acc, curr) => acc+curr, 0);
        leftSum.push(left);
        rightSum.push(right);
    })
    return leftSum.map((num, idx) => Math.abs(num - rightSum[idx]));
};