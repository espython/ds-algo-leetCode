/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
     const hashMap = new Map(Object.entries({ "(": ")", "{": "}", "[": "]" }));
  const stack = [];
  for (let ch of s) {
    if (hashMap.has(ch)) {
      // ch is an opening bracket
      stack.push(hashMap.get(ch));
    } else if (stack.length > 0 && stack[stack.length - 1] === ch) {
      // ch is a closing bracket and top of stack matches
      stack.pop();
    } else {
      // ch is a closing bracket and top of the stack doesn't match
      return false;
    }
  }
  return stack.length === 0;

    
};