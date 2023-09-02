// ### Basic Function

function addNumbers(num1, num2) {
  return 1 + 2;
}

console.log(addNumbers());

// ### Function with Conditional Statements

function findMax(number1, number2) {
  if (number1 > number2) {
    return console.log("number one is greater:", number1);
  } else if (number1 == number2) {
    return console.log(
      `the numbers are equal to each other: ${number1} = ${number2} `
    );
  } else {
    return console.log("number two is the greatest:", number2);
  }
}

console.log(findMax(2, 2));

// ### Nested Function

// first assumption
// function compute(num1, num2, operation) {
//   function arithmeticOperation(add, subtract, multiply, divide) {
//     if (operation === "+") {
//       console.log(add);
//     } else if (operation === "-") {
//       console.log(subtract);
//     } else if (operation === "*") {
//       return console.log(multiply);
//     } else if (operation === "%") {
//       return console.log(divide);
//     } else {
//       return "Invalid Operation";
//     }
//   }
// }

function compute(num1, num2, operation) {
  function add() {
    return num1 + num2;
  }
  function subtract() {
    return num1 - num2;
  }
  function multiply() {
    return num1 * num2;
  }
  function divide() {
    if (num2 === 0) {
      return "cannot divide by zero";
    }
    return num1 / num2;
  }

  switch (operation) {
    case "+":
      return add();
    case "-":
      return subtract();
    case "*":
      return multiply();
    case "/":
      return divide();
    default:
      "Invalid Operation";
  }
}

console.log(`add:  ${compute(1, 2, "+")}`);
console.log(`Substract: ${compute(10, 5, "-")}`);
console.log(`Muliply: ${compute(10, 2, "*")}`);
console.log(`Divide: ${compute(4, 2, "/")}`);
console.log(`Divide ${compute(100, 0, "/")}`);

// ## Step 2: Arrow Functions and Scopes

const squareNumber = (number) => {
  return number * number;
};

console.log(`sqaure Number of 2: ${squareNumber(2)}`);

// ### Understanding Scopes

var globalVar;

function squareNumberTwo(numnber) {
  let localVariable; // this is a block scope variable
  localVariable = numnber * numnber; //this will be available only in the function where it was declared
  return localVariable;
}
globalVar = squareNumberTwo(3);
console.log(`globalVar: ${squareNumberTwo(2)}`);
console.log(`globalVar: ${globalVar}`)
// console.log(`localVar: ${localVariable}`); expected error not defined
