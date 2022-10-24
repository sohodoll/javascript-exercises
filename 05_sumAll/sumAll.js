const sumAll = function(min, max) {
    
    if (min > max) {
        let c = min;
        min = max;
        max = c;
    } if (min < 0 || max < 0) {
        return 'ERROR';
    } if (typeof min != 'number' || typeof max != 'number') {
        return 'ERROR';
    }
    
    let array = [];
    for (let i = min; i<=max; i++) {
        array.push(i);
    }
    
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result = result + array[i];
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
