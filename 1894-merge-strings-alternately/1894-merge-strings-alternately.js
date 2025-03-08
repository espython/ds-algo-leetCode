/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
     const merged = [];
    const minLen = Math.min(word1.length, word2.length);
    
    // Step 1: Add characters alternately up to the minimum length
    for (let i = 0; i < minLen; i++) {
        merged.push(word1[i]);
        merged.push(word2[i]);
    }
    
    // Step 2: Append remaining characters from longer word
    merged.push(word1.slice(minLen));
    merged.push(word2.slice(minLen));
    
    // Step 3: Join all characters into final string
    return merged.join('');

    
};