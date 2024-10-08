/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let ans = [], sol = []

    function backTrack(open,close){
        if(sol.length == 2*n) {
            ans.push(sol.join(""))
            return
        }

        if(open < n){
            sol.push('(')
            backTrack(open+1,close)
            sol.pop()
        }

        if(open > close){
            sol.push(')')
            backTrack(open,close+1)
            sol.pop()
        }
    }

    backTrack(0,0)
    return ans

};