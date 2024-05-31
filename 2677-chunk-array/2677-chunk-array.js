/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    if(!arr.length){
        return []
    }
    let count = 0;
    let result = [];
    let currentChunk = [];
    for(let i = 0; i < arr.length; i++){
        if(count < size){
            currentChunk.push(arr[i]);
        }
        else{
            result.push(currentChunk);
            currentChunk = [arr[i]];
            count = 0;
        }
        count++;
    }
    result.push(currentChunk)
    return result
};
