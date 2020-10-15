const display = document.querySelector("#main-display");
let buttons = document.querySelectorAll(".btn");
let num1 = null;
let num2 = null;
let op = "";
let lastKey = null;

buttons.forEach((btn) => btn.addEventListener("click", updateDisplay));

function updateDisplay(key) {
  let keyValue = key.target.textContent;

  if (!isNaN(keyValue)) {
    if (lastKey === null || lastKey === "." || !isNaN(lastKey)) {
      if (lastKey === null || lastKey === "C") {
        display.textContent = "";
        display.append(keyValue);
      } else {
        display.append(keyValue);
      }
    } else if (isNaN(lastKey)) {
      display.textContent = "";
      display.append(keyValue);
    }
  }

  if (isNaN(keyValue)) {
    let checkDot = display.textContent;

    if (
      keyValue === "+" ||
      keyValue === "-" ||
      keyValue === "x" ||
      keyValue === "÷"
    ) {
      num1 = Number(display.textContent);
      op = keyValue;
      display.textContent = op;
    } else if (keyValue === ".") {
      if (display.textContent.includes(".")) {
        return;
      } else {
        display.append(keyValue);
      }
    } else if (keyValue === "=") {
      num2 = Number(display.textContent);
      let result = operate(op, num1, num2);
      result = +result.toFixed(2);
      display.textContent = result;
      num1 = result;

      console.log(num1);
      console.log(num2);
      console.log(op);
    } else if (keyValue === "C") {
      clear();
    }
  }
  lastKey = keyValue;
}

function clear() {
  display.textContent = "0";
  num1 = num2 = null;
  op = "";
  lastKey = null;
}

let add = function (a, b) {
  return a + b;
};

let substract = function (a, b) {
  return a - b;
};

let multiply = function (a, b) {
  return a * b;
};

let divide = function (a, b) {
  return a / b;
};

let operate = function (op, a, b) {
  switch (op) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return substract(a, b);
      break;
    case "x":
      return multiply(a, b);
      break;
    case "÷":
      return divide(a, b);
      break;
  }
};
