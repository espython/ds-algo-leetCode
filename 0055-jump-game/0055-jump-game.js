/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let target = nums.length - 1
    for(let i = nums.length -1 ; i >= 0 ; i-- ){
        if(nums[i] + i >= target) target = i

        console.log({target})

    }
    console.log({target})
    return target == 0 ? true :false

};