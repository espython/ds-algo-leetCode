/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let currentMin = prices[0]
    let currentMax = 0
    for(let price of prices){
        currentMin = Math.min(price,currentMin)
        currentMax = Math.max(currentMax,price -currentMin)
    }

    return currentMax
    
};