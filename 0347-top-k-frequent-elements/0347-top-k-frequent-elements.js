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
    let arr = [...map.entries()].sort((a,b)=>b[1] - a[1])
    console.log(arr)
    let x = arr.slice(0,k)
    console.log(x)
    let sol =[]
     for(let item of x){
        
        sol.push(item[0])
     }

     return sol

    
};