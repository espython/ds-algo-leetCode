/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    if(nums.length == 1) return nums
    const map = new Map()
    for(let i = 0 ; i < nums.length ; i++){
        map.has(nums[i]) ? map.set(nums[i],map.get(nums[i]) + 1) : map.set(nums[i],1)


    }
   return [...map.keys()].sort((a,b)=>map.get(b) - map.get(a)).slice(0,k)
    

    
};