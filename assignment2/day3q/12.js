// 12. Write a function `sumArray` that takes an array of numbers as input and returns the sum of all the numbers.

//    **Example:**
//    ```javascript
//    const input = [1, 2, 3, 4, 5];
//    const output = sumArray(input);
//    console.log(output); // 15

function sumarray(arr){
    let sum=0;
    
    for(let i=0; i<arr.length; i++)
    sum += arr[i];
    return sum;

}


let arr=[5, 5, 5, 5];
console.log(arr.length);
console.log(sumarray(arr));








