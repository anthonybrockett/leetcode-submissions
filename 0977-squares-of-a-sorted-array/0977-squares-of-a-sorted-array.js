/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const squares = [];
    for(let i = 0; i < nums.length; i++) {
        squares[i] = nums[i] ** 2
    }
    squares.sort(function(a, b){return a-b})
    return squares
};