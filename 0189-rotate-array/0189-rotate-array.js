/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k %= nums.length // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts
  
    let reverse = function (start, end) {
        while (start < end) {
           [nums[start], nums[end]] = [nums[end],nums[start]]
            start++
            end--
        }
    } // suppose  ----->---> 
    let start =0 , end = nums.length -1 
    reverse(start, end); // reverse   <--<------
    reverse(start , k-1) // reverse first part ---><----
    reverse(k, end)// reverse second part --->----->

};