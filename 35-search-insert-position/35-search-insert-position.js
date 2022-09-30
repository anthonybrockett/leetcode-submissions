/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length;
    while(start <= end) {
        let mid = Math.floor((start + end) * 0.5);
        if(nums[mid] === target) {
            return mid;
        } else if(nums[mid] < target) {
            start++;
        } else {
            end --;
        }
    }
    return start
};