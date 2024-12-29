// ** Dec 23, 2024 ** //
// Notes - https://drive.google.com/drive/folders/1nweZ9gZBRqqgPfdPCLJbJPrfuAARV_8e

console.log("Dec 23, 2024 - Variables and Data Types");
console.log("");
console.log("Second line to print");
// alert("My name is JP Singh");
// console.log (alert("My name is JP Singh"));

// Variables
const age=24;
console.log(age);

let firstName = "Jp Singh"
console.log(firstName);

var x = null;
var y = undefined;
console.log(x);
console.log(y);

const z = false; // boolean value
console.log(z);

// Afer ES6, we don't use var but prefer to use "let" or "const"

typeof age;

// Object - collection of values

let student = {
    firstName : "Jp",
    age : 36,
    mobile : 1234567890,
    isPass : true
};

console.log(student);
typeof student;
console.log(student.firstName);
console.log(student.firstName + " " +"Singh");

// Practise Question

const product = {
    desc : "Parker Jotter Standard CT Ball Pen (Black)",
    rating : 4,
    price : 270,
    isDeal : true,
    originalPrice : 285,
    discountOffer : 5
};

console.log (product);
console.log ("***********************************************");


