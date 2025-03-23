/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    const map = new Map([["(",")"],["[","]"],["{","}"]])
    const stack = []

    for(let c of s ){
        if(map.has(c)){
            stack.push(map.get(c))
        }else if(stack.length > 0 && stack[stack.length -1] == c){
            stack.pop()
        }else return false
    }

    return stack.length == 0
    
};