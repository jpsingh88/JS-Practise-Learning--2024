// ** Dec 26, 2024 ** //

// Arrays

console.log ("Dec 26, 2024 - Arrays");
console.log("");

// syntax

// let arrayName = [index_val_1,index_val_2,index_val_3,index_val_4];

let info =["Jp", 98765, 78, "Singh", "toronto", "male"];
console.log (info);

console.log (`Length of info array ${info.length}`);
console.log (info[1]);
console.log (typeof info);

// index value in Array can be updated/modified in memory but not incase of 
// strings as key values are immutable 

console.log("");

//  Task 1 - Print all elements of array using loop
console.log("Printing elements of array");
for (let i=0;i<info.length;i++) {
    console.log(info[i]);
}

// using for-of loop
console.log("Printing elements of array using for-of loop");
for (let i of info) {
    console.log(i);
}

// print all values in upper case
console.log("Printing elements of array in Upper Case");
for (let i of info) {
    console.log (i.toString().toUpperCase());
}

// Task 2 - For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// Find the average marks of the entire class.

let student = [85, 97, 44, 37, 76, 60];
let sum=0;
// for (i=0;i<student.length;i++) {
//     sum+=student[i];
// }

// using for of method
for (let i of student) {
    sum+=(i);
}
console.log(`Average of marks is ${sum/student.length}`);

// Task 3 - Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let price = [250, 645, 300, 900, 50];
console.log(`Original Price items: ${price}`);

for (let i=0;i<price.length;i++) {
    price[i]=price[i]*(1-10/100);
}

console.log(`Discounted Price items: ${price}`);


// Array Methods
// push(), pop(),toString()

let price2 = [250, 645, 300, 900, 50];
console.log(price2);
price2.push(100);
console.log(price2);
price2.pop();
console.log(price2);

// concat(), unshift(), shift()

let marks = [85, 97, 44, 37, 76, 60];
let pii = ["Jp", 98765, 78, "Singh", "toronto", "male"];

let concatArray = marks.concat(pii);
console.log(concatArray);

concatArray.shift("Hi");
console.log(concatArray);

concatArray.unshift("Hi");
console.log(concatArray);

// slice(), splice ()


// Task 4 - Create an array to store companies -> “Bloomberg”,“Microsoft”,“Uber”,“Google”,“IBM”,“Netflix”
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end

let companies =["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

console.log(companies);
companies.shift();
console.log("First company from the array",companies);

companies.splice(1,1,"Ola");
console.log("Replaced Uber with Ola",companies);

companies.splice(5,0,"Amazon");
console.log("Added Amazon at the end",companies);