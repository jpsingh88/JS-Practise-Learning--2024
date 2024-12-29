// ** Dec 25, 2024 ** //

// Loops and Strings

console.log ("Dec 25, 2024 - Loops and Strings");
console.log("");

// for loop

// for (let i=1;i<=5;i++) {
//     console.log ("i = ",i);
//     console.log ("For loop executed",i,"time");
// }

// for (var i=1;i<=5;i++) {
//     console.log ("i = ",i);
//     console.log ("For loop executed",i,"time");
// }

// console.log (i);

// for (let i=1;i<=5;) {
//     console.log ("i = ",i);
//     i++;
//     console.log ("For loop executed",i,"time");
// }

// Task 1 - Calculate sum of 1 to 5

// let num1 = prompt("Enter the first number");
// let num2 = prompt("Enter the second number");
// let num3=num1;

// num1 = Number(num1);
// num2 = Number(num2);

// for (let i=0;i<=num2; i++) {
//     console.log(i);
//     console.log(num1);
//     num1=num1+i;
//     console.log("Num after addition",num1);
// }
// console.log ("The sum from ", num3 ," to " , num2 , " is " , num1);


// Task 2 - Calculate sum of 1 to 5 using while loop

let num1 = 1;

while (num1<=5) {
    num1++;
}

console.log (num1);

// for in loop for Object

let student = {
    fName: "Jp",
    lName: "Singh",
    mobNum: 9876543210
};

for (let value in student) {
    console.log (value, ":", student[value]);
}

// Task 3 - Print all even number from 0 to 100

// let num = 0;
// using while loop

// while (num <=100) {
//     if (num%2==0) {
//         console.log (num);
//     }    
//     num++;
// }

// using for loop
// for (num;num<=100;num++) {
//     if (num%2==0) {
//         console.log (num);
//     }
// }

// using do-while loop

// do {
//     if (num%2==0) {
//             console.log (num);
//         }   
//     num++;
// } while (num<=100);


// Task 4 - Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters the correct value

//let randomGameNumber = 1;

// let randomGameNumber = Math.floor(Math.random() * 11); // Generates a random integer between 0 and 10


// let userValue = prompt("Enter any value");
// userValue = Number(userValue);

// while (userValue != randomGameNumber) {
//     console.log("You Entered: ",userValue);
//     console.log("Actual Number was",randomGameNumber);
//     userValue = prompt("Enter any value");
// }
// console.log("Value Matched: ",userValue);


// Strings


let str1 = "  Jaspreet Singh  ";
let str2 = "Chhabra";

console.log ("Length of 'Jaspreet  Singh' is ",str1.length);
console.log ("Length of 'Chhabra' is ",str2.length);
stringLength = str1.length
console.log ("String 1 length:",stringLength);

for (let i=0;i<stringLength;i++) {
    console.log(str1[i]);
}

// Template Literals ` string.... {$var_name}...`

console.log (`Length of 'Jaspreet Singh' is ${str1.length}`);
console.log (`Length of 'Jaspreet Singh' is \n${str1.length}`);
console.log (`Length of 'Jaspreet Singh' is \t ${str1.length}`);

// String Methods

// UpperCase, Lowercase, Trim

newStr = str1.toUpperCase()
console.log (`String updated to UpperCase ${newStr}`);

newStr = str1.toLowerCase()
console.log (`String updated to LowerCase ${newStr}`);

newStr = str1.trim()
console.log (`Extra spaces trimmed in ${newStr}`);


// Task 5 - Prompt the user to enter their full name. Generate a username for them based on the input.
// Start username with @, followed by their full name and ending with the fullname length.
// eg: user name = “shradhakhapra”, username should be “@shradhakhapra13”

let userName = prompt("Enter you full name");
nameLength = userName.length;
// console.log(nameLength);
// userName.trim
console.log(`@${userName}${nameLength}`);
console.log("@" + userName + nameLength);

