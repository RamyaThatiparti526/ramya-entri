// 8. Write a function `countWords` that takes a string as input and returns the number of words in the string.

//    **Example:**
//    ```javascript
//    const input = "This is a sample sentence.";
//    const output = countWords(input);
//    console.log(output); // 5
  
function countWords(sentence){
   let  words= sentence.split(" ");
  
   let words2=words.length;
   return words2;
  

}
let sentence="hi am ramya thatiparthi";
console.log(countWords(sentence));