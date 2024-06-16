/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    let currNum = n;
    while(currNum%2!==0){
        currNum*=2;
    }
    return currNum
};