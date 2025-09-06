/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    const set = new Set()
    let l = 0;
    let longest = 0;

    for(let r =0 ; r < s.length ; r++){
        while(set.has(s[r])){
            set.delete(s[l])
            l++
        }
            
       set.add(s[r])
       longest = Math.max(longest , r-l+1)
        
    }

    return longest





  
};


