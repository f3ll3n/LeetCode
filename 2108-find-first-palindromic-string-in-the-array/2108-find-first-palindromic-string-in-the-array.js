/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let result = "";
    for(let word of words){
        if(word === word.split('').reverse().join('') && !result){
            result = word
        }
    }
//     words.forEach((word) => {
        
//     })
    return result
};