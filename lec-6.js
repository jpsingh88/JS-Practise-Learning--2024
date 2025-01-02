// ** Jan 2, 2025 ** //

// DoM - Document Object Model

console.log ("Jan 2, 2025 - DoM - Document Object Model");
console.log("");

// Window Object
console.log (window);
window.console.log ("Printing using window object");

// window.alert ("Hello");

console.log(document); // Print the document object
console.dir(document); // Access the document object
console.dir(window.document); // Another way to write

console.dir(document.body); // Access the body object
console.log(document.body); // Print the body object

console.log(window.document.baseURI); // Print the URL of webpage
console.dir(document.URL); // Access the URL of webpage


document.body.style.backgroundColor = "lightyellow";
document.body.childNodes[1].textContent = "Heading updated via JS";
// another way to update
document.body.childNodes[1].innerText = "Again updated"

// DOM Manipulation

// Selection with id
// document.getElementById("line-1");

const headingDom = document.getElementById("line-1"); // return the value
console.log (headingDom);

const printText = headingDom.innerText;
console.log (printText);

// Selection with class
// document.getElementsByClassName
let classA = document.getElementsByClassName("newClass");
console.log (classA);

// Selection with element
let tagName = document.getElementsByTagName("p");
console.log(tagName);

// Query Selector

document.querySelector("p"); // Return 1st element
document.querySelector(".newClass"); // Return 1st element
document.querySelector("#line-1"); // Return 1st element
document.querySelectorAll("p");  // Return all  element

// DOM Manipulation

// tagName
let abc = document.querySelector("div")
console.log(abc.tagName);

document.querySelector("p").children

let xy = document.querySelectorAll("div")
xy.forEach( (i) => {
    console.log(i)
});

document.getElementsByClassName("new-items");
document.getElementsByTagName("ul");
document.getElementsByTagName("ul")[0].innerText;
document.querySelector("body > div.new-items > ul")

// Task 1 - Create a H2 heading element with text - “Hello JavaScript”. Append “from Apna College students” to this text using JS.

document.querySelector("h2").append(" by Jp Singh")

// Task 2 - Create 3 divs with common class name - “box”. Access them & add some unique text to each of them.

// document.getElementsByClassName("box")[0].innerText = "Changed via JS"

let jj = document.getElementsByClassName("box");
console.log (jj[0].innerText);
// jj[0].innerText = "Changed via JS"

let j=1;
for (let i of jj) {
    console.log(i.innerText=j + " div ");
    j++;
    }

// Attributes

// getAttribute (attr); // to get attribute value
// setAttribute (attr, value); // to set attribute value to

let nn = document.body.getElementsByTagName("div")
nn[9].getAttribute ("id")
// 'newID'
// nn[9]
// <div class=​"box6" id=​"newID">​ Sixth Div ​</div>​

nn[9].setAttribute("id","setNewID")

// Style
// node.style

let gg = document.body.getElementsByClassName("box")
gg[0].style
gg[0].style.backgroundColor = "lightgrey";
gg[1].style.fontSize="28px";
gg[2].style.visibility="hidden"


// Insert Elements

// node.append(el)
// First create element and then insert into DOM

// Create Element
let btn = document.createElement("button");
btn.innerText = "Click Me";

// Insert Element
document.querySelectorAll(".box");
let dd = document.querySelectorAll(".box");
dd[1].append(btn); // add at the end of node (inside)
dd[3].prepend(btn); // add at the start of node (inside)
dd[0].before(btn) // add before node (outside)
dd[5].after(btn) // add after node (outside)

let ff = document.getElementById("line-1");
let newHeading = document.createElement("h1")
newHeading.innerText = "This is the new Heading of this HTML Page";
ff.before(newHeading);


// Delete Element
// node.remove () // removes the node

let delEl = document.getElementsByTagName("ol")[2];
delEl.remove();


// appendChild(aChild) // adds a node to the end of the list of children of a specified parent node.
let delEle = document.getElementsByTagName("ul");
let addChild = document.createElement ("ol");
addChild.innerText = "New Item Added";
delEle[0].appendChild(addChild)

// removeChild() // removes a child node from the DOM and returns the removed node.
let newEl = document.getElementsByTagName("ul")
let childNode = newEl[0].children[2]
childNode
/* <ol>​Item 4​</ol>​ */
newEl[0].removeChild(childNode)
/* <ol>​Item 4​</ol>​ */

// Task 3 - Create a new button element. Give it a text “click me”, background color of red & text color of white. Insert the button as the first element inside the body tag.

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";
let firEl = document.getElementsByTagName("h1")[0];
firEl.before(newBtn);


// Task 4 - Create a <p> tag in html, give it a class & some styling. Now create a new class in CSS and try to append this class to the <p> element. Solve this problem using classList.


document.getElementsByClassName("newPara")
// document.getElementsByClassName("newPara")[0].setAttribute("class","newClass2")
// This will remove the old class and add new class

document.getElementsByClassName("newPara")[0].classList;
document.getElementsByClassName("newPara")[0].classList.add("newClass2")

