/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
      if (str1 + str2 !== str2 + str1) {
        return "";
    }
    
    // Calculate the GCD of the lengths
    const gcdLength = gcd(str1.length, str2.length);
    
    // Return the prefix of length gcdLength
    return str1.substring(0, gcdLength);
}

/**
 * Helper function to find GCD of two numbers using Euclidean algorithm
 */
function gcd(a, b) {
    while (b) {
        [a, b] = [b, a % b];
    }
    return a;
    
};