/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    if (nums.length <= 1) return true
    let i = 0
    let max = 0
    let target = nums.length -1
    while (i < nums.length) {
        console.log({ i })
        let step = nums[i]
        max = Math.max(max,i+nums[i])
        if (max == i) return false
        if (max >= target) return true
        i++
    }
    return false

};