

// 36. Write a function `countVowels` that takes a string as input and returns the count of vowels (a, e, i, o, u) in the string.

//    **Example:**
//    ```javascript
//    const input = "hello world";
//    const output = countVowels(input);
//    console.log(output); // 3
//    ```

   
// function removeVowels(string) {
//     let count=0;
//     for (let i=0;i<string.length;i++){
//     if(string.charAt(i)=='a' || string.charAt(i)=='e' || string.charAt(i)=='i'|| string.charAt(i)=='o' || string.charAt(i)=='u'){
//         count+=i;
//         return count;
//     }
//     }
// }
//   let string = "hello world ramya";
// console.log(removeVowels(string));

function Fn_count_Vowels(str) { 
// find the count of vowels
    let count = str.match(/[aeiou]/gi).length;
// return number of vowels
    return count;
}
// take input
let str = "Hello World";
console.log( Fn_count_Vowels(str));