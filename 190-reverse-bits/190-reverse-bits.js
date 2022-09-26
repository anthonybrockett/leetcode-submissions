/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    // Convert input to string
    let bits = n.toString(2);
    // Split each bit to an array element to reverse them, and use .join to get the reversed binary input
    bits = bits.split('').reverse().join('');
    for(let i = 0; i < 32; i++) {
       if(bits[i] === undefined) bits += 0;
    }
    return parseInt(bits, 2)
};