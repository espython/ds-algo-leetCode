/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
 let curMin = prices[0]
 let curMax = 0 
 for(let cur of prices){
    curMin = Math.min(cur,curMin)
    curMax = Math.max(curMax,cur-curMin)
 }

return curMax






};