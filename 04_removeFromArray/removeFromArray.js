const removeFromArray = function(array, ...toRemove) {
    toRemove.forEach(number => {
        array = array.filter(element => element !== number)
    })
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
