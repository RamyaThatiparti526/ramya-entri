// **Question 3: Count the Occurrences of a Character in a String**

// Write a function `countChar` that takes a string and a character as input and returns the number of times that character appears in the string.
// **Example:**
// ```javascript
const inputString = "programming";
// const inputChar = "m";
// const output = countChar(inputString, inputChar);
// console.log(output); // 2

let arr = ["ramya", "eswar", "eswar","divya",
          "maneeh", "naveen", "naveen"];
  
function removeDuplicates(arr) {
    return arr.filter((item,  index) =>
       
        arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));