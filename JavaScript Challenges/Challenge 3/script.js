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

// first attempt
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
  let localVariable;
  localVariable = numnber * numnber;
  return localVariable;
}
globalVar = squareNumberTwo(3);
console.log(`globalVar: ${squareNumberTwo(2)}`);
console.log(`globalVar: ${globalVar}`);
// console.log(`localVar: ${localVariable}`); expected error not defined

// ## Step 3: Loops

// ### For Loop

for (let i = 1; i <= 10; i++) {
  console.log(`Print out ${i}`);
}

// ### While Loop

let i = 10;
while (i >= 1) {
  i--;
  console.log(`print: ${i}`);
}

// ### Do-While Loop with Conditionals

let j = 1;
do {
  if (j % 2 === 0) {
    console.log(`The j: ${j}`);
  }
  j++;
} while (j <= 10);

// ### Advanced Loop Challenge

const array1 = ["Apple", "Peach", "Banana", "lemon", "watermelon"];
for (let i = 0; i < array1.length; i++) {
  if (array1[i].length > 5) {
    console.log(`length more than 5: ${array1[i]}`);
  }
}
