
// **Question 4: Remove Duplicates from an Array**

// Write a function `removeDuplicates` that takes an array of numbers as input and returns a new array with duplicate values removed.
let arr = ["ramya", "eswar", "eswar","divya",
          "maneeh", "naveen", "naveen"];
  
function removeDuplicates(arr) {
    return arr.filter((item,  index) =>
       
        arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));

// program to remove duplicate value from an array




// program to remove duplicate value from an array

// function getUnique(arr){
// // removing duplicate
//     let uniqueArr = [...new Set(arr)];
//      return uniqueArr;
// }
// const array = [1, 2, 3, 2, 3];

// calling the function
// console.log(getUnique(array));