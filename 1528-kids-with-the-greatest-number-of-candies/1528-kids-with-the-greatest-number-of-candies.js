/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = 0
    let exArray = []
    for(let i =0 ; i < candies.length ; i++){
        max = Math.max(candies[i],max)
    }

    for(let i =0 ; i < candies.length ; i++){
       if(candies[i] + extraCandies >= max){
        exArray.push(true)
       }else {
        exArray.push(false)
       }
    }
    
return exArray
    
};