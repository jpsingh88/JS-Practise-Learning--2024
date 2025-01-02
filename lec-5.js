// ** Dec 27, 2024 ** //

// Arrays

console.log ("Dec 27, 2024 - Functions and Methods");
console.log("");

// example - log(); toUpperCase(); toString();

function myFunction() {
    console.log("This is my first function");
}
myFunction();

console.log("");

let i=1;
while (i < 5) {
myFunction();
i++;
}


function myFunction2(parameter,n) {
    n.toString();
    console.log(parameter + " " + n);
}
myFunction2("Passing 'argument' for the 'parameter' in function",100);

// Task 1 - Create a function to calculate the sum of 2 numbers
/*
let num1 = prompt("Enter the first number");
let num2 = prompt("Enter the second number");
num1=Number(num1);
num2=Number(num2);
calculateSum();

function calculateSum () {
    let num3 =num1+num2;
    console.log (`Sum of ${num1} and ${num2} is: ${num3}`);

}
*/

// Alternate Method

let sum = calculateSum(5,4);
console.log("Sum is",sum);

function calculateSum (a,b) {
    // console.log("Sum is", a+b);
    // let c = a+b;
    // return c;
    // or we can write it as
    return a+b;
}


// Arrow function

/*
let functionName = (para 1, para 2) => {
    work to do
    }
*/

// Sum of 2 numbers

let sumCalculator = (yy,zz) => {
    return yy+zz;
}

console.log(sumCalculator(9,10));



// Multiplication of 2 number using arrow function

let multiplyVar = (no1,no2) => {
    return no1*no2;
}

console.log(multiplyVar (5,6));

multiplyVar = 10;
console.log(multiplyVar);

let printHello = () => {
    console.log("Print Arrow Function without passing any argument");
};

console.log(printHello());



// Task 2 - Create a function using the “function” keyword that takes a String as an argument & returns the number of vowels in the string.


const vowelCounter = (string) => {
    let count = 0;
    for (let i of string) {
        if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
            console.log ("Vowels in the string are", i);
            count++;
        }  
    }
    console.log (`Number of vowels are: ${count}`);
};

vowelCounter("Jaspreet Singh Chhabra");

// let string = "jaspreetsingh";
// console.log ("String is", string);

// Dec 29,2024

// forEach Loop in Arrays - Higher Order Function/Method - function to execute for each element in the array

/*
arrayName.forEach(element => {
}); 
*/

// Old Method - Print all elements in an array
console.log ("Print all elements in an array - Using for loop");

let numArray = [1,2,3,4,5];

// for (let i=0;i<numArray.length;i++) {
//     console.log(numArray[i]);
// }
for (let i of numArray) {
    console.log(i);
}

// New Method
console.log ("Print all elements in an array - Using forEach function");

numArray.forEach(j => {
    console.log(j);
});

numArray.forEach (function printValue (k) {
    console.log ("Another way to write : ",k);
});

// Task 3 - Convert all elements of array to UpperCase

let cities = ["toronto", "Calgary", "Surrey", "thunderbay"];

cities.forEach((i,indValue,cities) => {
    console.log (i.toUpperCase(),", Index Value of City is:",indValue, cities);
});

// Task 4 - For a given array of numbers, print the square of each value using the forEach loop.

let randomNumers = [1,4,7,2,3,6,10];

randomNumers.forEach(i => {
    console.log("Square of",i," is: ",i*=i);
});

// Another way to write the above

let anotherMethod = (i) => {
    console.log ("Square of",i," is: ",i*i)
}

randomNumers.forEach(anotherMethod);


// More Array Methods

// Map Method - Perform action on array but no change in original array and creates a new one

// Syntax
// array.map ( callbackfunction(value,index,array) ) 

// Task - For a given array of numbers, print the square of each value using the forEach loop.

// let randomNumers = [1,4,7,2,3,6,10];

let mapArray = randomNumers.map ( (i) => {
    return i*i;
});
console.log (mapArray);

// Filter Method - Create a new array, Filter values in array based on some condition

// Task - Print all even values in an Array using filter method

// let randomNumers = [1,4,7,2,3,6,10];
console.log ("Print all even values in an Array using filter method");
let evenNumber = randomNumers.filter ( (i) => {
    return i%2 === 0;
});

console.log (evenNumber);

// Reduce Method for array - Perform some operation and reduces the array to return a single value

// Syntax - 

// Task - Calculate the sum of array

let sumArray = randomNumers.reduce ( (prevValue,currVal) => {
    return prevValue + currVal;
} );

console.log ("Sum of array is: ", sumArray);

// Task - Calculate the largest element in the array using reduce method

let largestElement = randomNumers.reduce ( (prevValue,currVal) => {
    if(prevValue>currVal) return prevValue
    else return currVal;
})

console.log ("Largest element in the array is: ", largestElement)

// Task 5 - We are given array of marks of students. Filter our of the marks of students that scored 90+.

let studentMarks = [40,50,60,70,80,90,100,110,120,130];

let metricStudents = studentMarks.filter ( (i) => {
    return i>90;
})

console.log(metricStudents);

/* Task 6 - Take a number n as input from user. Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array. */

let arrayLength = prompt ("Enter the length of array: ")
arrayLength = Number(arrayLength); // optional

let newArray = [];
for (let i=1; i<=arrayLength; i++) {
    newArray[i-1] = i;
}
console.log("Array is: ",newArray);

let sumOfArray = newArray.reduce( (prevValue, nextValue) => {
    return prevValue += nextValue;
})
console.log ("Sum of all numbers in the array is: ", sumOfArray);

let productOfArray = newArray.reduce( (prevValue, nextValue) => {
    return prevValue *= nextValue;
})
console.log ("Product of all numbers in the array is: ", productOfArray);
