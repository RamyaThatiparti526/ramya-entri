// **9. Find Largest Element in an Array:**
// Write a program to find the largest element in an array using a `for` loop.

const numbers = [7, 2, 9, 11, 5];
let largest = numbers[0];
for (let i = 0; i <= numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log(largest); // 9
