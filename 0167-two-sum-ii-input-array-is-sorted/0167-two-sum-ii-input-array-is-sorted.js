/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    const map = new Map()
    let i = 0
    while (i < numbers.length) {
        let num1 = numbers[i]
        let num2 = target - num1
        if (map.has(num2)) return [map.get(num2)
            + 1, i + 1]

        map.set(numbers[i], i)
        i++
    }
    console.log(map)

};