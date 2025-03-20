/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
   k %= nums.length

   function reverse(start,end){
    while(start < end){
        [nums[end],nums[start]] = [nums[start],nums[end]]
        start++
        end--
    }
   }
    let start =0 , end = nums.length -1
    reverse(start,end)
    reverse(start,k-1)
    reverse(k,end)

   }



