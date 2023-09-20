// **Question 6: Merge Two Sorted Arrays**

// Write a function `mergeSortedArrays` that takes two sorted arrays as input and merges them into a single sorted array.

// function mergeSortedArrays(inputArray1,inputArray2){

// let inputArray1 = [1, 3, 5];
// let inputArray2 = [2, 4, 6];
// let output =inputArray1+","+inputArray2;
// console.log(output); // [1, 2, 3, 4, 5, 6]

// console.log( mergeSortedArrays(inputArray1,inputArray2));

function getUniqueAfterMerge(arr1, arr2){
let arr = arr1.concat(arr2);
let uniqueArr = [];
// loop through array
for(let i of arr) {
    if(uniqueArr.indexOf(i) === -1) {
        uniqueArr.push(i);
    }
}
console.log(uniqueArr);
}
const array1 = [1, 2, 3];
const array2 = [2, 3, 5]

// calling the function
// passing array argument
getUniqueAfterMerge(array1, array2);