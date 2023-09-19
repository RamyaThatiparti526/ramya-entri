// 10. Write a function `removeVowels` that takes a string as input and returns the string with all vowels removed.



// let str = "Learning JavaScript";
// let noVowelsStr = str.replace(/[aeiou]/gi, '');
// console.log(noVowelsStr); //"Lrnng JvScrpt"

function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '');
    }

  let str = "apple umbrella egg ink ox";
console.log(removeVowels(str));

  
 