/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const reversedNums = function(nums, start, end) {
    while(start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
};

var rotate = function(nums, k) {
    let steps = k % nums.length;
    nums.reverse();
    reversedNums(nums, 0, steps - 1);
    reversedNums(nums, steps, nums.length - 1);
};