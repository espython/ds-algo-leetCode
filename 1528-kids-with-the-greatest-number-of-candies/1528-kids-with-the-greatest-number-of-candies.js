/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxCandies = Math.max(...candies)

    return candies.map(candy=>{
        return candy + extraCandies >= maxCandies
    }) 
  

    
};