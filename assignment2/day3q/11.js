// 11. Write a function `isAnagram` that takes two strings as input and returns `true` if they are anagrams (contain the same characters in a different order), and `false` otherwise.

//    **Example:**
//    ```javascript
//    const input1 = "listen";
//    const input2 = "silent";
//    const output = isAnagram(input1, input2);
//    console.log(output); // true

   function isAnagram(str1,str2){
   let x=str1.split('');
   let y=str2.split('');
   let a=x.length;
   let b=y.length;
   console.log(a);
   console.log(b);
   if(b!=a){
      return false
     }
   let x1=x.sort(); 
   console.log(x1);
   let y1=y.sort();
   console.log(y1);
   for (let i = 0; i < a ; i++){
   if (x1[i] != y1[i]){
      return false;
   }
   return true;
   } 
   }
   let str1="listen";
   let str2="silent";
   console.log(isAnagram(str1,str2));



