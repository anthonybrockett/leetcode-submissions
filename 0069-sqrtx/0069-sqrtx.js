/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let a = 1;
    let b = a - 1;
    let result = 0
    while(result < x) {
        result = a * a;
        a++;
    }
    if(result === x) {
        return a - 1
    } else {
        return a - 2
    }
};