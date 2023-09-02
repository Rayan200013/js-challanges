//step one
console.log("I am linked now!");

//step two
let name = "Rayan";

alert(`name: ${name}`);

//step three
const fisrtName = "Rayan";
const lastName = "Bouezzeddine";
let age = 22;
const dOb = "october, 13, 2000";

console.log(fisrtName);
console.log(lastName);
console.log(age);
console.log(dOb);
function fullName() {
  return `${fisrtName} ${lastName}`; //this is a function that return the full name of the user
}
console.error(fullName());

// step three

let str = "this is a text";
let num1 = 1215;
let num2 = 999;
let numTrue = true;
let numFalse = false;
let obj = {};
let arr = [];
let nullValue = null;
let undefinedValue = undefined;
console.log(str);
console.log(num1 + typeof num1);
console.log(typeof num2);
console.log(typeof numTrue);
console.log(typeof numFalse);
console.log(typeof obj);
console.log(typeof arr);
console.log(typeof nullValue);
console.log(typeof undefinedValue);

//step four

let myText = "this is a text";
let myTexTwo = "this is 2nd text";
let myTexThree = `This is 3rd text`;

const counter = 3;
const backtick = `This is my text using backticks ${counter} times`;
const singleQuote = "This is my text using single quotations ${counter} times";
const doubleQuote = "This is my text using double quotations ${counter} times";
const tryThisAlso = `This is my new version, it's the ${2 + 3}th version`;

console.log(backtick);
console.log(singleQuote);
console.log(doubleQuote);
console.log(tryThisAlso);
console.log(
  `the difference between them is that when using the dollar sign in double and single quote it will not work thus when using it with backtick it will function normally like this: backtick: ${counter}`
);

// step six

let numberOne = 1;
let numberTwo = 2;
let result = numberOne + numberTwo;
console.log(result);

// ### Step 7

let greetOne = "Hello";
let greetTwo = "Hello";
let resultGreet;
if (greetOne === greetTwo) {
  resultGreet = true;
}

console.log(resultGreet);

// ### Step 8

let result0 = 5 + 3 * 2;

console.log(result0);

let result1 = 10 / 2 + 3;
let result2 = 10 / (2 + 3);

console.log(result1);
console.log(result2);
