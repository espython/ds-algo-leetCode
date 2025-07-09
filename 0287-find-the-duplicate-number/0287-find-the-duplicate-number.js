/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
     let slow = nums[0];
    let fast = nums[0];
    
    // Phase 1: Find intersection
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);
    
    // Phase 2: Find entrance to cycle
    slow = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return slow;
    
};