/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let min = nums[0]
    for(let item of nums){
        min = Math.min(item,min)
    }
    return min
};