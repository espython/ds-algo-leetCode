/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k %= nums.length // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts
  
    let reverse = function (i, j) {
        while (i < j) {
           [nums[i], nums[j]] = [nums[j],nums[i]]
            i++
            j--
        }
    } // suppose  ----->---> 
    let start =0 , end = nums.length -1 , mid = k - 1
    reverse(start, end); // reverse   <--<------
    reverse(start , mid) // reverse first part ---><----
    reverse(mid+1, end)// reverse second part --->----->

};