const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
  if (!array.length) {return 0}
	const result =  array.reduce((total, element) => {
      return total + element;
    })
  return result;
};

const multiply = function(array) {
  if (!array.length) {return 0}
	const result =  array.reduce((total, element) => {
      return total * element;
    })
  return result;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
	let result = 1;
   for (let i = 1; i <= a; i++) {
       result = result * i;
   }
   return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
