/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let charList = s.split("")
    let chuncksList = splitList(charList, 2 * k)

    for (let chunck of chuncksList) {

        let left = 0
        let right = 0
        if (chunck.length < k) {
            right = chunck.length - 1
        } else if (chunck.length < 2*k || chunck.length >= k) {
            right = k - 1
        }
        while (left < right) {


            [chunck[left], chunck[right]] = [chunck[right], chunck[left]]
            left++
            right--
        }
    }

    return chuncksList.flat().join("")

};

function splitList(list, chunck) {
    let newList = []
    for (let i = 0; i < list.length; i += chunck) {
        let smallList = list.slice(i, i + chunck)
        newList.push(smallList)
    }

    return newList

}