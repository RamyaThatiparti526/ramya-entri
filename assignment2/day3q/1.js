// Write a function `reverseString` that takes a string as input and returns the reverse of that string.

// **Example:**
// ```javascript
// const input = "hello";
// const output = reverseString(input);
// console.log(output); // "olleh"
// abbrev_name = function (str1) {
//     var split_names = str1.trim().split(" ");
//     if (split_names.length > 1) {
//         return (split_names[0].charAt(0) + " " + split_names[1].charAt(0) + ".");
//     }
//     return split_names[0];
// };
// console.log(abbrev_name("Ramya thatiparti"));

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



function reverseString1(input){
   
    let reversed=" ";
    for(let i=input.length-1;i>=0;i++){
        reversed+=input[i];
    }
    console.log(reversed);
}

console.log(reverseString1("hello"));






