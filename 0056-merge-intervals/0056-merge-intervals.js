/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    const merged = []
    intervals.sort((a, b) => a[0] - b[0])
    const lastIndex = merged.length > 0 ? merged.length - 1 :0
    for (let interval of intervals) {
        if (merged.length == 0 || merged[lastIndex][1] < interval[0]) {
            merged.push(interval)
        } else {
            merged[lastIndex][1] =  Math.max(merged[lastIndex][1], interval[1])
        }
    }
    return merged


};