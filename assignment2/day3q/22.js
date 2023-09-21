// 22. Write a function `countWords` that takes a string as input and returns the number of words in the string.

//    **Example:**
//    ```javascript
//    const input = "This is a sample sentence.";
//    const output = countWords(input);
//    console.log(output); // 5

   function countWords(sentence){
   let  countwords=sentence.split(" ");
   console.log(countwords);
   let count=countwords.length;
   return count;
}
   let sentence= "hi am ramya thatiparti";
   console.log(countWords(sentence));