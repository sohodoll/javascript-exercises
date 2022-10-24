const ftoc = function(faren) {
  const cels = (faren - 32) * 5/9;
  const result = Math.round(cels * 10) / 10;
  return result;
};

const ctof = function(cels) {
  const faren = (cels * 9/5) + 32;
  const result = Math.round(faren * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
