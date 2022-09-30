/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let idx = 1
    for(let i = 1; i < nums.length; i++){
        if(nums[i - 1] !== nums[i]){  
            nums[idx] = nums[i];  
            idx++; 
        }
    }
    return idx
};