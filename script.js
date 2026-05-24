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
    return false;
  }

  return true;
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
  if (checkScreenWidth()) {
    let prevNum = displayEl.textContent;
    displayEl.textContent = prevNum + 1;
  }   
}

function two() {
  if (checkScreenWidth()) {
    let prevNum = displayEl.textContent;
    displayEl.textContent = prevNum + 2;
  }   
}

function three() {
  if (checkScreenWidth()) {
    let prevNum = displayEl.textContent;
    displayEl.textContent = prevNum + 3;
  }   
}

function four() {
  if (checkScreenWidth()) {
    let prevNum = displayEl.textContent;
    displayEl.textContent = prevNum + 4;
  }   
}

function five() {
  if (checkScreenWidth()) {
    let prevNum = displayEl.textContent;
    displayEl.textContent = prevNum + 5;
  }   
}

function six() {
  if (checkScreenWidth()) {
    let prevNum = displayEl.textContent;
    displayEl.textContent = prevNum + 6;
  }   
}

function seven() {
  if (checkScreenWidth()) {
    let prevNum = displayEl.textContent;
    displayEl.textContent = prevNum + 7;
  }   
}

function eight() {
  if (checkScreenWidth()) {
    let prevNum = displayEl.textContent;
    displayEl.textContent = prevNum + 8;
  }   
}

function nine() {
  if (checkScreenWidth()) {
    let prevNum = displayEl.textContent;
    displayEl.textContent = prevNum + 9;
  }   
}

function zero() {
  if (checkScreenWidth()) {
    let prevNum = displayEl.textContent;
    displayEl.textContent = prevNum + 0;
  }     
}

function btnAC() {
  displayEl.textContent = "";
  currentValue = 0;
  
}

function btnDel() {
  let prevNum = displayEl.textContent;
  let newNum = prevNum.slice(0, -1);
  displayEl.textContent = newNum;
  
}

function btnDot() {
  if (checkScreenWidth()) {
    let prevNum = displayEl.textContent;
    displayEl.textContent = prevNum + ".";
  }   
}

function btnDivide() {
  if (checkScreenWidth()) {
    let prevNum = displayEl.textContent;
    displayEl.textContent = prevNum + '/';
  }   
}

function btnAdd() {
  if (checkScreenWidth()) {
    let prevNum = displayEl.textContent;
    displayEl.textContent = prevNum + "+";
  }   
}

function btnSub() {
 if (checkScreenWidth()) {
   let prevNum = displayEl.textContent;
   displayEl.textContent = prevNum + "-";
 }   
}

function btnMultiply() {
  if (checkScreenWidth()) {
    let prevNum = displayEl.textContent;
    displayEl.textContent = prevNum + "*";
  }   
}

function btnModulus() {
  if (checkScreenWidth()) {
    let prevNum = displayEl.textContent;
    displayEl.textContent = prevNum + "/";
  }
}
