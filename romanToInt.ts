const s1 = "III"
const s2 = "LVIII"
const s3 = "MCMXCIV"
function romanToInt(s: string) {
  const objRoman: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  if (s.length === 0) return 0
  if (s.length === 1) return objRoman[s]
  const sList = s.split("")
  let intSum = 0


  for (let i = 0; i < sList.length; i++) {
    if (sList[i] === "I" && sList[i + 1] === "V") {
      intSum = intSum + 4
      i++
    } else if (sList[i] === "I" && sList[i + 1] === "X") {
      intSum = intSum + 9
      i++
    } else if (sList[i] === "X" && sList[i + 1] === "L") {
      intSum = intSum + 40
      i++
    } else if (sList[i] === "X" && sList[i + 1] === "C") {
      intSum = intSum + 90
      i++
    } else if (sList[i] === "C" && sList[i + 1] === "D") {
      intSum = intSum + 400
      i++
    } else if (sList[i] === "C" && sList[i + 1] === "M") {
      intSum = intSum + 900
      i++
    }

    else {

      intSum = intSum + objRoman[sList[i]]
    }

  }
  return intSum


}

console.log(romanToInt(s3))