const fibonacci = function(n) {
    if (n<0) {
        return 'OOPS'
    }
    n = Number(n);
    let array = [];
    for (let i = 1; i <= n; i++) {
        if (i == 1) {
            array.push(1);
        } else if (i == 2) {
          array.push(1);  
        } else {
            array.push(array[i-2] + array[i-3]);
        }
    }
    return array[n-1];
};

// Do not edit below this line
module.exports = fibonacci;
