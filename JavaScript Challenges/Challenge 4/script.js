// ## Step 1: Arrays and Objects

// ### Array Creation

const fiveNumbers = [5, 2, 10, 7, 9];

// ### Object Creation

const personalInfo = {
  name: "Rayan",
  age: 22,
  height: 185,
  location: "Lebanon",
  nationality: "Lebanese",
};

// ## Step 2: Spread Operator

// ### New Array with Spread

let nextThreeNumbers = [15, 20, 19];

let allNumbers = { ...fiveNumbers, ...nextThreeNumbers };
console.log(allNumbers);

// ### New Object with Spread

let additionalInfo = {
  occupation: "bees",
  hobby: "Singing",
  education: "Management Information System",
};
let fullInfo = { ...personalInfo, ...additionalInfo };
console.log(fullInfo);

const [firstNum, secondNum, thirdNum] = fiveNumbers;

// ### Destructuring Objects


const { name, location, nationality } = personalInfo;
console.log(personalInfo);





// Step 4: Advanced Operations

// Nested Destructuring
const { contactInfo: { email, phone } } = personalInfo;

const [num1, num2, ...restOfNumbers] = fiveNumbers;

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 };