/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;
	let neededChar = {}; //To Store the frequency/count of required string s1
	for (let i = 0; i < s1.length; i++) {
		neededChar[s1[i]] = (neededChar[s1[i]] || 0) + 1;
	}
	let left = 0; //left pointer/index of the sliding window
	let	right = 0; //right pointer/index of the sliding window
	let requiredLength = s1.length; //length of the substring required in s2
    while (right < s2.length) {
	    if (neededChar[s2[right]] > 0) requiredLength--;
	    neededChar[s2[right]]--;
	    right++ //window is incremented by 1 step
	    if (requiredLength === 0) return true;
	    if (right - left === s1.length) {
	    	if (neededChar[s2[left]] >= 0) requiredLength++;
	    	neededChar[s2[left]]++;
	    	left++
      }
    }
	return false;
};