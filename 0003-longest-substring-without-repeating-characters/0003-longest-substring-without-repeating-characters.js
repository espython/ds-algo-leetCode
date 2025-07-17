/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = 0;
    let length = s.length;
    let set = new Set();
    let longest = 0;
    
    for(let r = 0; r < length; r++) {
        // While the current character is already in our set
        while(set.has(s[r])) {
            // Remove the leftmost character and move the left pointer
            set.delete(s[l]);
            l++;
        }
        
        // Add the current character to our set
        set.add(s[r]);
        
        // Update the longest length if current window is longer
        longest = Math.max(longest, r - l + 1);
    }
    
    return longest;
};
