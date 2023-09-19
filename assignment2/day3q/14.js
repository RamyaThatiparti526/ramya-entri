
// 14. Write a function `findAverage` that takes an array of numbers as input and returns the average of all the numbers.

//    **Example:**
//    ```javascript
//    const input = [10, 20, 30, 40, 50];
//    const output = findAverage(input);
//    console.log(output); // 30
//    


function avg(numbers){
let sum=0;

for (let i=0; i<numbers.length; i++)
{
    sum += numbers[i];
   }
let avg=sum/numbers.length;
return avg;
}


const numbers=[4,10];
console.log(avg(numbers));





