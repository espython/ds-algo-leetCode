/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    if(!nums || nums.length == 0) return []
    if(nums.length == 1) return nums[0]
    let maxAverage = -Infinity
    let left = 0
    let right = k-1

    while (right < nums.length){
        let current=0 
        for(let i = left; i <= right; i++){
            current = current + nums[i]
        }
        maxAverage = Math.max(current/k,maxAverage)
        left++
        right++

    }
return maxAverage;
    
};