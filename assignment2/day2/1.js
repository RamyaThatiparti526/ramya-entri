// Write a function `reverseString` that takes a string as input and returns the reverse of that string.

// **Example:**
// // ```javascript
// const input = "hello";
// const output = reverseString(...input);
// console.log(output); // "olleh"


function reversestring(input){
    
    let reversed="";
    for(let i=input.length-1; i>=0; i--){
        reversed+=input[i];
    }
    return reversed;
}
let input="hello"
console.log(reversestring(input));