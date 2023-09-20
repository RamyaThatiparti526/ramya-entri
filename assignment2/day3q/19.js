// 19. Write a function `findDuplicates` that takes an array and returns an array containing all the duplicate elements.

//     **Example:**
//     ```javascript
//     const input = [1, 2, 2, 3, 4, 4, 5];
//     const output = findDuplicates(input);
//     console.log(output); // [2, 4]
//     ```
//     function getUnique(arr){
// // removing duplicate
//         let uniqueArr = [...new Set(arr)];
// console.log(uniqueArr);
//     }
//     const array = [1, 2, 3, 2, 3];
//     // calling the function
//     getUnique(array)
let arry = [1, 2, 1, 3, 4, 3, 5];

let toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)
let duplicateElements = toFindDuplicates(arry);
console.log(duplicateElements);

// Output: [1, 3]
    