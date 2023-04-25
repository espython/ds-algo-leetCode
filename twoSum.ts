function twoSum(nums: number[], target: number): number[] {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i]
    let num2 = target - num1;



    if (map.has(num2)) {

      return [map.get(num2), i]
    }
    map.set(num1, i)

  }


};