/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currMax = nums[0]
    let globalMax = nums[0]

     for (let i = 1; i < nums.length; i++) {
        if (currMax < 0) {
            currMax = nums[i];
        } else {
            currMax += nums[i];
        }
        if (globalMax < currMax) {
            globalMax = currMax;
        }
    }
    return globalMax
    
};