/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let test = new Set(nums)
    return nums.length !== test.size 
};