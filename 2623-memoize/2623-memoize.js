/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cached = {};
    return function(...args) {
        if(args in cached){
            return cached[args];
        }
        else{
            cached[args] = fn(...args);
            return cached[args];
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */