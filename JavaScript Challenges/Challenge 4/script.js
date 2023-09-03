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

// Construct another object named `additionalInfo` with properties like occupation, hobby, and education.
// Using the spread operator, create a new object named `fullInfo` which merges the properties from both `personalInfo` and `additionalInfo`.

let additionalInfo = {
  occupation: "bees",
  hobby: "Singing",
  education: "Management Information System",
};
let fullInfo = { ...personalInfo, ...additionalInfo };
console.log(fullInfo);
