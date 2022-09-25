/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function(nums) {
    // Array to hold final products - fill array same legth as input with 1's (starting at 1 to avoid the first numerical value for products)
    const products = Array(nums.length).fill(1);
    // Set base value to increase for each product
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
