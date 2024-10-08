/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    if (nums.length == 1) return nums[0]
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {

        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        } else { map.set(nums[i], 1) }
    }

    let current = 0
    let max = null
    for (let [key, value] of map) {
        if (value > current) {
            current = value
            max = key
        }

    }
    return max
};