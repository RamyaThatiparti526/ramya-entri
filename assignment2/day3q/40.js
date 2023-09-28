// 40. Write a function `countWordsInArray` that takes an array of strings as input and returns an array where each element is the count of words in the corresponding string.

//    **Example:**
//    ```javascript
//    const input = ["Hello world!", "This is a test sentence.", "Count me."];
//    const output = countWordsInArray(input);
//    console.log(output); // [2, 5, 2]

// function countWordsInArray(arr1){
//      const arr2=arr1.length;
//      for(i=0; i<arr2; i++){
//         if(arr2[i]>1){
//                 return arr2[i].length;
//         }

//      }

 
// }
// console.log(countWordsInArray(arr1));
// let arr1=["Hello world!", "This is a test sentence.", "Count me."]


// function countWords(str) {
//     const arr = str.split(' ');
  
//     return arr.filter(word => word !== '').length;
//   }

//   let str=

// let array1=['ramya sonu','ramya tatiparthi 1234',"ramya 123"];
// let arr= array1[0].split(' ');
// console.log(arr);
// console.log(arr.length);
// let array3=[];
// for(i=0; i< array1.length;i++){
//     array3+= array1[i].split(' ').length;
//     console.log( array3);
//     array4=array3.split('');
//     console.log(array4);
//    }

   function  countWordsInArray(array1){
        let arr= array1[0].split(' ');
       // console.log(arr);
       // console.log(arr.length);
        let array3=[];
        for(i=0; i< array1.length;i++){
        array3+= array1[i].split(' ').length;
        }
       // console.log( array3);
        let array4=array3.split('');
        return array4;
        }
        array1=["Hello world!", "This is a test sentence.", "Count me."];
        console.log(countWordsInArray(array1));