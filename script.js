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

const processClick = function (e) {
  console.log(e.target.id);
};

const clear = document.getElementById('clear');
const plusMinus = document.getElementById('plusMinus');
const percent = document.getElementById('percent');
const plus = document.getElementById('+');

const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const minus = document.getElementById('-');

const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const times = document.getElementById('*');

const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const divided = document.getElementById('/');

const zero = document.getElementById('0');
const decimal = document.getElementById('.');
const backspace = document.getElementById('backspace');
const equals = document.getElementById('=');

clear.addEventListener('click', processClick);
plusMinus.addEventListener('click', processClick);
percent.addEventListener('click', processClick);
plus.addEventListener('click', processClick);

seven.addEventListener('click', processClick);
eight.addEventListener('click', processClick);
nine.addEventListener('click', processClick);
minus.addEventListener('click', processClick);

four.addEventListener('click', processClick);
five.addEventListener('click', processClick);
six.addEventListener('click', processClick);
times.addEventListener('click', processClick);

one.addEventListener('click', processClick);
two.addEventListener('click', processClick);
three.addEventListener('click', processClick);
divided.addEventListener('click', processClick);

zero.addEventListener('click', processClick);
decimal.addEventListener('click', processClick);
backspace.addEventListener('click', processClick);
equals.addEventListener('click', processClick);
