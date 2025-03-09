/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (n === 0) return true;
    
    let count = 0;
    const len = flowerbed.length;
    let fb = [...flowerbed]; // Create a copy to avoid modifying the original
    
    for (let i = 0; i < len; i++) {
        // Check if current position is empty and neighbors are also empty (or out of bounds)
        if (
            fb[i] === 0 && 
            (i === 0 || fb[i-1] === 0) && 
            (i === len - 1 || fb[i+1] === 0)
        ) {
            // Plant a flower
            fb[i] = 1;
            count++;
            
            if (count >= n) {
                return true;
            }
        }
    }
    
    return false;
};
