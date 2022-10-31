const palindromes = function (str) {
    let trimmedStr = str.split(',').join('')
    .split('!').join('')
    .split(' ').join('')
    .replace('.', '').toLowerCase();
    let reversedStr = '';
    for (let i = trimmedStr.length-1; i >= 0; i--) {
        reversedStr += trimmedStr[i];
    }
    return reversedStr==trimmedStr;
};

// Do not edit below this line
module.exports = palindromes;
