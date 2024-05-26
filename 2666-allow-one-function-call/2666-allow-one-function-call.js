/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let isCalled = false;
    let result = function(...args){
        if(!isCalled){
            isCalled = !isCalled;            
            return fn(...args)
        }else{
            return undefined
        }
    }
    return result
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
