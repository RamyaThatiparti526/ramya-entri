// Write a function `findMax` that takes an array of numbers as input and returns the maximum number from the array.
// **Example:**
// ```javascript
// const input = [3, 7, 1, 9, 5];
// const output = findMax(input);
// console.log(output); // 9
function findmax(numbers){
let largest = numbers[0];
for (let i = 0; i <= numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
return largest; 
}
const numbers = [7, 2, 9, 11, 5];
console.log(findmax(numbers));
