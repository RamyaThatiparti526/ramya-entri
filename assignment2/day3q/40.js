// 40. Write a function `countWordsInArray` that takes an array of strings as input and returns an array where each element is the count of words in the corresponding string.

//    **Example:**
//    ```javascript
//    const input = ["Hello world!", "This is a test sentence.", "Count me."];
//    const output = countWordsInArray(input);
//    console.log(output); // [2, 5, 2]

function countWordsInArray(arr1){
  
   
      
        return str.filter(word => word !== ' ').length;
      

}
let arr1='"Hello world!" "This is a test sentence.", "Count me."'
console.log(countWordsInArray(arr1));


// function countWords(str) {
//     const arr = str.split(' ');
  
//     return arr.filter(word => word !== '').length;
//   }

//   let str=
