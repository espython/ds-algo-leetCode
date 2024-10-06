function twoSum(nums: number[], target: number): number[] {
const map = new Map()
let i = 0
while(i<nums.length){
    let num1 = nums[i]
    let num2 = target - num1
    if(map.has(num2)) return [map.get(num2),i]

    map.set(nums[i],i)
    i++
}

};