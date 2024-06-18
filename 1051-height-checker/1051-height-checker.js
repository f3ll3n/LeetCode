/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let result = 0;
    let sortedArr = heights.toSorted((a,b) => a - b);
    heights.forEach((n, idx) => {
        if(n !== sortedArr[idx]){
            result++
        }
    })
    return result
};