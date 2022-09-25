/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function(nums) {
    // Array to hold final products
    const products = Array(nums.length).fill(1);
    // Value to increment for each index
    let increment = 1;
    // Add items to products from front
    for(let i = 0; i < nums.length; i++) {
        products[i] *= increment;
        increment *= nums[i];
    }
    // Reset Increment
    increment = 1
    // Add items to products from back
    for(let i = nums.length - 1; i >= 0 ; i--) {
        products[i] *= increment;
        increment *= nums[i];
    }
    return products;
};
