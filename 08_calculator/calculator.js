const add = function(...b) {
	return b;
};

const subtract = function() {
	
};

const sum = function(...sum) {
	summed = sum.reduce(totalSum);

  function totalSum(total,currentValue){
    return total + currentValue;
  };
  return summed;
};

const multiply = function(...mult) {
  multiplied = mult.reduce(totalProd)

  function totalProd(total,currentValue){
    return total * currentValue;
  }
  return multiplied;
};

const power = function(a,b) {
  c = a ** b;
  return c;
	
};

const factorial = function() {
	
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
