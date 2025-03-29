/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const map = new Map()
    const dup = []
    for(let num of nums){
        if(map.has(num)){
            dup.push(num)
        }else {
            map.set(num,0)
        }


    }

    return dup
    
};