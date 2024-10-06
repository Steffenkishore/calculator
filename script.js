let displayEl = document.getElementById("displayElement");
let currentValue;
let nextValue;
let operator;
let resultValue;
let firstNumber;
let secondNumber;
let numberLength;

function checkScreenWidth() {
  numberLength = displayEl.textContent.length;

  if (numberLength >= 18) {
    alert("Calculator reached maximum values!!");
  }
}

function equalTo() {
  let numberEntered = displayEl.textContent;
  let operatorArray = ["+", "-", "/", "*", "%"];
  for (let each of operatorArray) {
    if (numberEntered.includes(each)) {
      let operatorIndex = numberEntered.indexOf(each);
      currentValue = numberEntered.slice(0, operatorIndex);
      nextValue = numberEntered.slice(operatorIndex + 1, numberEntered.length);
      operator = each;
    }
  }

  if (currentValue.includes(".")) {
    firstNumber = parseFloat(currentValue);
  } else {
    firstNumber = parseInt(currentValue);
  }

  if (nextValue.includes(".")) {
    secondNumber = parseFloat(nextValue);
  } else {
    secondNumber = parseInt(nextValue);
  }

  if (operator === "+") {
    resultValue = firstNumber + secondNumber;
  } else if (operator === "-") {
    resultValue = firstNumber - secondNumber;
  } else if (operator === "/") {
    resultValue = firstNumber / secondNumber;
  } else if (operator === "*") {
    resultValue = firstNumber * secondNumber;
  } else if (operator === "%") {
    resultValue = firstNumber % secondNumber;
  }
  displayEl.textContent = resultValue;
  
}

function one() {
  let prevNum = displayEl.textContent;
  displayEl.textContent = prevNum + 1;
  checkScreenWidth();
}

function two() {
  let prevNum = displayEl.textContent;
  displayEl.textContent = prevNum + 2;
  checkScreenWidth();
}

function three() {
  let prevNum = displayEl.textContent;
  displayEl.textContent = prevNum + 3;
  checkScreenWidth();
}

function four() {
  let prevNum = displayEl.textContent;
  displayEl.textContent = prevNum + 4;
  checkScreenWidth();
}

function five() {
  let prevNum = displayEl.textContent;
  displayEl.textContent = prevNum + 5;
  checkScreenWidth();
}

function six() {
  let prevNum = displayEl.textContent;
  displayEl.textContent = prevNum + 6;
  checkScreenWidth();
}

function seven() {
  let prevNum = displayEl.textContent;
  displayEl.textContent = prevNum + 7;
  checkScreenWidth();
}

function eight() {
  let prevNum = displayEl.textContent;
  displayEl.textContent = prevNum + 8;
  checkScreenWidth();
}

function nine() {
  let prevNum = displayEl.textContent;
  displayEl.textContent = prevNum + 9;
  checkScreenWidth();
}

function zero() {
  let prevNum = displayEl.textContent;
  displayEl.textContent = prevNum + 0;
  checkScreenWidth();
}

function btnAC() {
  displayEl.textContent = "";
  currentValue = 0;
  checkScreenWidth();
}

function btnDel() {
  let prevNum = displayEl.textContent;
  let newNum = prevNum.slice(0, -1);
  displayEl.textContent = newNum;
  checkScreenWidth();
}

function btnDot() {
  let prevNum = displayEl.textContent;
  displayEl.textContent = prevNum + ".";
  checkScreenWidth();
}

function btnDivide() {
  let prevContent = displayEl.textContent;
  displayEl.textContent = prevContent + "/";
  checkScreenWidth();
}

function btnAdd() {
  let prevContent = displayEl.textContent;
  displayEl.textContent = prevContent + "+";
  checkScreenWidth();
}

function btnSub() {
  let prevContent = displayEl.textContent;
  displayEl.textContent = prevContent + "-";
  checkScreenWidth();
}

function btnMultiply() {
  let prevContent = displayEl.textContent;
  displayEl.textContent = prevContent + "*";
  checkScreenWidth();
}

function btnModulus() {
  let prevContent = displayEl.textContent;
  displayEl.textContent = prevContent + "%";
  checkScreenWidth();
}
