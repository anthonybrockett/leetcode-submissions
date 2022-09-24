/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let solved = false;
    let i = 0;
    const solutionArray = [];
    while(i < nums.length && !solved) {
        let j = i + 1;
        while(j < nums.length && !solved) {
            if(nums[i] + nums[j] === target) {
                solved = true;
                solutionArray.push(i);
                solutionArray.push(j);                
            }
            j += 1;
        }
        i += 1;
    }
    return solutionArray;
};