/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let reversed = [];
    let split = s.split(' ');
    split.forEach(function(t) {
        t = t.split('').reverse().join('')
        reversed.push(t)
    })
    return reversed.join(' ')
};