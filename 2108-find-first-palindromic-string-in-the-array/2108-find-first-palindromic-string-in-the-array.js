/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let result = "";
    words.forEach((word) => {
        if(word === word.split('').reverse().join('') && !result){
            result = word
        }
    })
    return result
};