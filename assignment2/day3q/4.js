// **Question 3: Count the Occurrences of a Character in a String**

// Write a function `countChar` that takes a string and a character as input and returns the number of times that character appears in the string.

function countChar(str, x) {
  let res = 0;
  for (let i = 0; i <= str.length; i++) {
    if (str.charAt(i) == x) res++;
  }
  return res;
}
let str = "ramya thatiparthi";
let x = "t";
console.log(countChar(str, x));
