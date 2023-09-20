// 17. Write a function `findIndex` that takes an array and an element as input and returns the index of the first occurrence of the element in the array. If the element is not found, return -1.

//     **Example:**
//     ```javascript
//     const inputArray = [1, 2, 3, 4, 5];
//     const element = 3;
//     const output = findIndex(inputArray, element);
//     console.log(output); // 2

    function findIndex(arr){
    const  index =arr.indexOf(i);
    return index;
    }
   let i='apple';
    let arr=["banana","apple","apple","cherry"];
    console.log(findIndex(arr));
 doubt ::: if i array 2 values are same so how can i find indexof that;