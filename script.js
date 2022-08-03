const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const multiply = function (x, y) {
  return x * y;
};

const divide = function (x, y) {
  return x / y;
};

const operate = function (operator, x, y) {
  switch (operator) {
    case '+':
      return add(x, y);
      break;
    case '-':
      return subtract(x, y);
      break;
    case '*':
      return multiply(x, y);
      break;
    case '/':
      return divide(x, y);
      break;
  }
};

console.log(operate('/', 5, 6));
