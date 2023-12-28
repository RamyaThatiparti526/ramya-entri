// string manipulation:

// let text = "Hello, Ramya!";
// console.log(text.length); // Outputs: 13
// console.log(text.toUpperCase()); // Outputs: "HELLO, RAMYA!"
// console.log(text.toLowerCase()); // Outputs: "hello, ramya!"
// console.log(text.substring(0, 5)); // Outputs: "Hello"

// Template Literals
// Template literals provide an easy way to interpolate variables and expressions into strings.
// let name = "Ramya";
// console.log(`Welcome, ${name}!`); // Outputs: "Welcome, Ramya!
// Arrow Functions
// An alternative way to write shorter functions without the function keyword.
// const add = (a, b) => a + b;
// console.log(add(5, 3)); // Outputs: 8
// Destructuring
// This syntax makes it possible to unpack values from arrays or properties from objects into distinct variables.
// let [firstFruit, secondFruit] = ["Apple", "Banana"];
// console.log(firstFruit); // Outputs: Apple

// let {firstName, lastName} = {firstName: "Ramya", lastName: "Doe"};
// console.log(lastName); // Outputs: Doe

//     Spread Operator
// Allows an iterable such as an array or string to be expanded in places where zero or more arguments or elements are expected.
let parts = ["shoulders", "knees"];
let lyrics = ["head", ...parts, "and", "toes"];
console.log(lyrics); // Outputs: ["head", "shoulders", "knees", "and", "toes"]
// Rest Parameters
// Represents an indefinite number of arguments as an arra
function sum(...numbers) {
  return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
console.log(sum(1, 2, 3)); // Outputs: 6
// Default Parameters
// Allows named parameters to be initialized with default values if no value or undefined is passed.

function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(greet()); // Outputs: "Hello, Guest!"
console.log(greet("Ramya")); // Outputs: "Hello, Ramya!"
//     Working with JSON
// JavaScript Object Notation (JSON) is a common format for sending and requesting data through a REST API.
let jsonData = '{"firstName": "Ramya", "lastName": "Doe"}';
let obj = JSON.parse(jsonData);
console.log(obj.firstName); // Outputs: Ramya

let backToJson = JSON.stringify(obj);
console.log(backToJson); // Outputs: '{"firstName":"Ramya","lastName":"Doe"}'
// Promises and Async/Await
// javaScript allows asynchronous code execution, which is useful for operations like fetching data from a server.

// Using Promises
let promise = new Promise(function (resolve, reject) {
  // Some asynchronous operation
  setTimeout(() => resolve("Data received"), 1000);
});

promise.then(
  (result) => console.log(result), // Outputs: "Data received" after 1 second
  (error) => console.log(error)
);

// Using Async/Await
async function fetchData() {
  let response = await fetch("https://api.example.com/data");
  let data = await response.json();
  console.log(data);
}

fetchData();
// Modules
// JavaScript modules are a way to split the code into separate files.

// file: math.js
export function add(x, y) {
  return x + y;
}

// file: main.js
import { add } from "./math.js";
console.log(add(4, 5)); // Outputs: 9
