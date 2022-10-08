/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 0;
    let count = 0;
    let len = s.length;
    let set = new Set();
    
    while(left < len && right < len) {
        let char = s.charAt(right);
        if(!set.has(char)) {
            set.add(char);
            right++;
            count = Math.max(count, right - left);
        } else {
            set.delete(s.charAt(left));
            left++;
        }
    }
    return count
};