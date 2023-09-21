// 18. Write a function `filterEvenNumbers` that takes an array of numbers as input and returns a new array containing only the even numbers.

//     **Example:**
//     ```javascript
//     const input = [1, 2, 3, 4, 5, 6];
//     const output = filterEvenNumbers(input);
//     console.log(output); // [2, 4, 6]

function evenarray(arr){
    // loop through array
    let evens = arr.filter(x=> x % 2 === 0);
    return evens;
}
let arr = [1, 2, 3, 4,5];
// calling the function
// passing array argument
console.log(evenarray(arr));

