/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let birinchiSon = roman[s[i]];
        let keyingiSon = roman[s[i + 1]];

        if (keyingiSon > birinchiSon) {
            result += keyingiSon - birinchiSon;
            i++;
        } else {
            result += birinchiSon;
        }
    }
    return result;
};
let s = "MC";
console.log(romanToInt(s));