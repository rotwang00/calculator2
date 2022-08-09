let displayContent = '0';
let equation = [];
let firstChar = true;

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operations = ['+', '-', '*', '/'];

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

const processEquation = function () {
  let answer = 0;
  let x = '';
  let oper = '';
  let y = '';

  while (digits.includes(equation[0])) {
    x += equation.shift();
  }

  oper = equation.shift();

  while (digits.includes(equation[0])) {
    y += equation.shift();
  }

  answer = operate(oper, x, y);
  displayContent += ` = ${answer}`;
  firstChar = true;
  updateDisplay();
};

const processClick = function (e) {
  let char = e.target.id;

  // It's a number
  if (digits.includes(char)) {
    if (firstChar) {
      if (char === '0') {
        displayContent = '0';
        equation = [];
        updateDisplay();
        return;
      } else {
        displayContent = char;
        equation.push(char);
        firstChar = false;
        updateDisplay();
        return;
      }
    } else {
      displayContent += char;
      equation.push(char);
      updateDisplay();
      return;
    }
  }

  // It's an operator
  if (operations.includes(char)) {
    if (operations.includes(equation[equation.length - 1])) {
      return; // The previous char was also an operator
    } else {
      displayContent += ` ${char} `;
      equation.push(char);
      updateDisplay();
      return;
    }
  }

  // It's the clear key
  if (char === 'clear') {
    displayContent = '0';
    equation = [];
    firstChar = true;
    updateDisplay();
    return;
  }

  // It's the equals key
  if (char === '=') {
    if (operations.includes(equation[equation.length - 1])) {
      return; // The previous char was an operator
    } else {
      processEquation();
    }
  }
};

const updateDisplay = function () {
  display.textContent = displayContent;
};

const display = document.getElementById('display');

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
