// 41. Write a function `filterWordsByLength` that takes an array of words (strings) and a length as input and returns an array containing only the words of the specified length.

//    **Example:**
//    ```javascript
//    const inputWords = ["apple", "banana", "cherry", "date"];
//    const inputLength = 5;
//    const output = filterWordsByLength(inputWords, inputLength);
// //    console.log(output); // ["apple", "cherry"]
// function filterWordsByLength(strings,k){
  
//    for (let i=0; i< strings.length;i++){
//     if(k==strings[i].length){
//         return strings[i];
//     }  
//    }  
// }
// let strings=['sonu','harshit','ram','writer','vinay'];
// let k=5;
// console.log(filterWordsByLength(strings,k));
function filterWordsByLength(strings,k){
const result=strings.filter(strings=>strings.length==k);
return result;
}
let k=4;
let strings=['sonu','harshit','ram','writer','vinay'];
console.log(filterWordsByLength(strings,k));



