/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const objRoman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    const integers = s.split('').map(c => objRoman[c]);
  
  return integers.reduce((acc, x, i) => x < integers[i+1] ? acc - x : acc + x, 0);


};