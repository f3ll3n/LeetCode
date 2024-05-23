/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let newArr = arr;
    let result = [];
    for(let i = 0; i < newArr.length; i++){
        if(fn(newArr[i], i)){
            result.push(newArr[i]);
        }               
    }
    return result
};