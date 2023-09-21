// 43. Write a function `filterOddNumbers` that takes an array of numbers as input and returns an array containing only the odd numbers.
// *Example:**
//    ```javascript
//    const input = [1, 2, 3, 4, 5, 6];
//    const output = filterOddNumbers(input);
//    console.log(output); // [1, 3, 5]

function filterOddNumbers(numbers){
    // loop through array
    let odds =numbers.filter(x=> x % 2 !== 0);
    return odds;
}
let numbers = [1, 2, 3, 4,5];

console.log(filterOddNumbers(numbers));

