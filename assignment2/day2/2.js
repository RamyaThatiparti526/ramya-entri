// Write a function `findMax` that takes an array of numbers as input and returns the maximum number from the array.

// **Example:**
// ```javascript


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