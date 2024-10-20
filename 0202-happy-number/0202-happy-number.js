/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let slow = n, fast = calcSquares(n)

    while(fast !== 1 && fast !== slow){
        slow = calcSquares(slow)
        fast = calcSquares(calcSquares(fast))
    }

    if(fast == 1) return true

    return false

    
};

function calcSquares(number){
    let totalSum = 0
    while(number > 0){
        let digit = number % 10
        number = Math.floor(number/10)
        totalSum += digit ** 2

    }
    return totalSum
}