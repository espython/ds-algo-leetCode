/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const list = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split("");
    console.log(list)
    let left =0 , right = list.length -1 ;

    for(let i = 0 ; i < list.length; i++){
    if(list[left] !== list[right]){
        return false
    }

    left++
    right--

    }
    return true
    
};