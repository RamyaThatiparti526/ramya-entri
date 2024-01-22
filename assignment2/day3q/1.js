// Write a function `reverseString` that takes a string as input and returns the reverse of that string.

// **Example:**
// ```javascript
// const input = "hello";
// const output = reverseString(input);
// console.log(output); // "olleh"

// **5. Reverse a String:**
// Write a program to reverse a string using a `for` loop.

// **Example:**
// ```javascript
// const input = "hello";
// let reversed = "";
// for (let i = input.length - 1; i >= 0; i--) {
//   reversed += input[i];
// }
// console.log(reversed); // "olleh"

function reversestring(input) {
  let reversed = "";
  for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
  }
  return reversed;
}
let input = "hello";
console.log(reversestring(input));

function reverseString(input) {
  let reversed = "";
  for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
  }
  return reversed;
}
let input = "ramya";
console.log(reverseString(input));
