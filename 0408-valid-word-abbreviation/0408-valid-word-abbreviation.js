/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
 let wordIndex = 0, abbrIndex = 0;

    while (abbrIndex < abbr.length) {
        if (!isNaN(abbr[abbrIndex])) {
            if (abbr[abbrIndex] === '0') {
                return false;
            }
            let num = 0;

            while (abbrIndex < abbr.length &&!isNaN(abbr[abbrIndex])) {
                num = num * 10 + parseInt(abbr[abbrIndex]);
                abbrIndex++;
            }
            wordIndex += num;
        } else {
            if (wordIndex >= word.length || word[wordIndex]!== abbr[abbrIndex]) {
                return false;
            }
            wordIndex++;
            abbrIndex++;
        }
    }

    return wordIndex === word.length && abbrIndex === abbr.length;
    
};