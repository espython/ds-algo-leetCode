/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l =0
    let length = s.length
    let set = new Set()
    let longest = 0;
    for(let r =0 ; r < length ; r++){
        console.log({longest})
        while(set.has(s[r])){
        set.delete(s[l])
        l++
    }
        set.add(s[r])
        longest = Math.max(longest,r-l +1)
    }
    
  return longest
    
    
    
};