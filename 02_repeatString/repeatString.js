const repeatString = function(str, num) {
    let result = '';

    if (num < 0 ) {
        return 'ERROR'
    }

    if (str === '') {
        return str;
    }

    for(let i = 0; i<num; i++) {
        result = result + str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
