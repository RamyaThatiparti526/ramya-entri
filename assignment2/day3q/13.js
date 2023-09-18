// 13. Write a function `findMin` that takes an array of numbers as input and returns the minimum number in the array.

//    **Example:**
//    ```javascript
//    const input = [3, 1, 4, 1, 5];
//    const output = findMin(input);
//    console.log(output); // 1
//    ```
function findmin(numbers){
    let smallest = numbers[0];
    for (let i = 0; i <= numbers.length; i++) {
      if (numbers[i] < smallest) {
        smallest = numbers[i];
      }
    }
    return smallest; 
    }
    const numbers = [7, 2, 9, 11, 5];
    console.log(findmin(numbers));
    