// ** Dec 24, 2024 ** //

// Operators and Conditional Statements

console.log ("Dec 24, 2024 - Operators and Conditional Statements");
console.log("");

// +, - , * , / operators

let a = 14;
let b = 8;

let c = a+b;
console.log("a:" , a);
console.log("b:" , b);
console.log("a + b = ", c);
// or 
console.log("a + b = ", a+b);  
console.log("a - b = ", a-b);  
console.log("a * b = ", a*b);  
console.log("a / b = ", a/b);  
console.log("a % b = ", a%b);  

console.log("a = ", a);  
console.log("a++ = ", a++);  
console.log("a = ", a);  
console.log("a-- = ", a--);  
console.log("a = ", a);  
console.log("++a = ", ++a);  
console.log("a = ", a);  
console.log("--a = ", --a);  
console.log("a = ", a);  

console.log("");  

console.log("a+=4 = ",a+=4);
console.log("a = ", a);  
console.log("a-=4 = ",a-=4);
console.log("a = ", a);  
console.log("a*=4 = ",a*=4);
console.log("a = ", a);  
console.log("a/=4 = ",a/=4);
console.log("a = ", a);  

console.log(""); 

console.log("'a'",a, "== 'b'",b,"=",a==b);
console.log("'a'",a, "!= 'b'",b,"=",a!=b);

let age=18;
if (age==18) {
    console.log("Age:",age);
    console.log("You can vote",age==18);
}

// Task 1 - Ask user to input a number and see if it's a Odd or Even Number

// Get user input and store it in variable 'ab'
let ab = prompt("Enter a number:");

// First check if ab is a valid number or not
if (isNaN(ab)) {
    console.log("The value entered '",ab,"' is not a valid number")
    
    // If not a number then convert the input to a number
    ab = Number(ab);
}
// Check if the number is even or odd
else if (ab%2 == 0) {
        console.log ("The value entered",ab,"is a Even number");
}
    else {
        console.log ("The value entered",ab,"is a Odd number");
    }


// Task 2 - Ask user to input a color and show the output color

let color = prompt("Enter a color");

if (color == "dark" || color == "Dark") {
    console.log ("Color is ",color);
}
else if (color == "light") {
    console.log ("Color is ",color);
}
else if (color == "blue") {
    console.log ("Color is ", color)
}
else if (color == "pink") {
    console.log ("Color is ", color)
}
else {
    console.log (color, "Color is neither of the option")
}

// Task 3 - Get user to input a number using prompt, check if number ia multiple of 5 or not

let number = prompt("Enter a number:");
// Check if the enter value is a number

if (isNaN(number)) {
    console.log ("Entered value is not a valid number")
}
else if (number%5 == 0) {
    console.log (number,"Number is multiple of 5")
}
else {
    console.log (number,"Number is not mutilple of 5")
}

/* Task 4 - Write a code which can give grades to students according to their scores:
80-100 - A
70-89 - B
60-69 - C
50-59 - D
0-49 - F
*/

let studentScore = prompt("Enter your score:");
if (studentScore >=80 && studentScore <=100) {
    console.log("Your Grade is A")
}
else if (studentScore >=70 && studentScore <=89) {
    console.log("Your Grade is B")
}
else if (studentScore >=60 && studentScore <=69) {
    console.log("Your Grade is B")
}
else if (studentScore >=50 && studentScore <=59) {
    console.log("Your Grade is B")
}
else if (studentScore >=0 && studentScore <=49) {
    console.log("Your Grade is F")
}
else {
    console.log ("Invalid score entered")
}