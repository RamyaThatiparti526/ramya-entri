
// 9. Write a function `reverseWords` that takes a string as input and returns the string with its words reversed.




function reverseWords(sentence){
   
    let  words= sentence.split(" ");
   
    reversed=" ";
    for(let i=words.length-1; i>=0;i--){
       
        reversed+=words[i]+" ";
    }
    return reversed;

 
 }
 let sentence="hi am ramya thatiparthi";
 console.log (reverseWords(sentence));

 
