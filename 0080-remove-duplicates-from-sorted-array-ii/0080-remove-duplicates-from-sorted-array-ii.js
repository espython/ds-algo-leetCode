/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    // if(nums.length <= 2) {
    //     return nums.length;
    // }
    // const map = new Map()
    // let count = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     if (map.has(nums[i])) {
    //         map.set(nums[i],map.get(nums[i]) + 1)
    //     } else {

    //         map.set(nums[i], 1)
    //     }
    //     if(map.get(nums[i]) >= 2 ) nums.splice(i,1)


    // }
    // console.log(nums)
    // console.log(map)
     let j = 0;
  let i = 0;

  for (; i < nums.length; i++){
    if (nums[i] !== nums[i + 2]) {
      nums[j] = nums[i];
      j++;
    }
  }

  return j;
     

};