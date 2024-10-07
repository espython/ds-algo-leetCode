/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const len = nums.length
  nums.push(...nums.splice(0, (-k % len + len) % len))
  return nums
    
};