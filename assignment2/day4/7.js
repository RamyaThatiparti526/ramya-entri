// 7. Write a function `capitalizeFirstLetter` that takes a string as input and returns the same string with the first letter capitalized.

//    **Example:**
//    ```javascript
//    const input = "hello world";
//    const output = capitalizeFirstLetter(input);
//    console.log(output); // "Hello world"

   function capitalizeFirstLetter(str){
   const str1=str.charAt(0).toUpperCase()+str.slice(1);
   return str1;
   }
   let str="ramya";
   console.log(capitalizeFirstLetter(str));