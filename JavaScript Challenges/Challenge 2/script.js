// step one

let age1 = 22;

console.log(`my Age is: ${age1}, can I enter the room?`);

console.log(`${age1} > 20?`);
if (age1 >= 20) {
  console.log("you can enter the room");
} else {
  console.log("you cant enter");
}

const expression1 = 5 > 3;
const expression2 = 10 === "10";
const expression3 = true && false;
const expression4 = !expression3;

console.log(expression1);
console.log(expression2);
console.log(expression3);
console.log(expression4);

// ## Step 2

let age = 25;
let hasDriverLicense = true;
let hasCar = false;
let canDrive = false;
let canRentCar = false;
let needDriver = false;
console.log(`needDriver before ${needDriver}`);
console.log(`canRentCar before ${canRentCar}`);
console.log(canDrive);

if (age >= 18 && hasDriverLicense == true) {
  canDrive = true;
} else {
  needDriver = true;
}
console.log(`can Drive? ${canDrive}`);

if (age >= 22 && hasDriverLicense == true && hasCar == false) {
  canRentCar = true;
} else {
  canRentCar = false;
}
console.log(`Have a car? carRentCar after: ${canRentCar}`);

if (age >= 18 && hasDriverLicense == false && hasCar == false) {
  needDriver = true;
} else {
  needDriver = false;
}

// ## Step 3



let role = "admin";
switch (role) {
  case "admin":
    console.log("You have read and write access for the data");
  case "user":
    console.log("You have only read access");
    break;
  case "guest":
    console.log("you dont have any access");
    break;
  default:
    console.log("User role is not recoginized");
}
