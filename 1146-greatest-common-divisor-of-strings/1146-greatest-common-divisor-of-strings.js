/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1+str2 !== str2+str1) return ""
    let gcdNum = gcd(str1.length,str2.length)

    return str1.substring(0,gcdNum)
}

/**
 * Helper function to find GCD of two numbers using Euclidean algorithm
 */
function gcd(a, b) {
    while(b){
        [a,b] = [b,a%b]
    }
    return a
    
};