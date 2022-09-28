/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let oneBits = 0;
    let criteria = 1;
    for(let i = 0; i < 32; i++){
        if((n & criteria) !== 0) {
            oneBits += 1;
        }
        criteria <<= 1; 
    }
    return oneBits;      
};