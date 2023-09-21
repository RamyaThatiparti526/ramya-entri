

// 37. Write a function `findLongestWord` that takes a sentence (string) as input and returns the length of the longest word in the sentence.
// **Example:**
// ```javascript
// const input = "This is a simple sentence";
// const output = findLongestWord(input);
// console.log(output); // 8

function findLongestWord(string){
    let words=string.split(' ');
    console.log(words);
    let x=words.length;
    console.log(x);
    let longest ="";
    console.log(longest);
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longest.length) {
        longest = words[i];
      }
    }
    return longest; 
    }
    const string ="This is a simple sentence" ;
    console.log(findLongestWord(string));


    // function longest(str){
    //     // Split the string using regex
    //     str = str.match(/[a-zA-Z0-9]+/gi);

        // // Creating a empty string to store largest word
        // let largest = "";
             
        // // Creating a for...loop to iterate over the array
        // for(let i = 0; i < str.length; i++){
        //     // If the i'th item is greater than largest string
        //     // then overwrite the largest string with the i'th value
        //     if(str[i].length > largest.length){
        //     largest = str[i]
        //     }
        // }
        // return largest;
        // // }
        //      console.log(longest("Hello guys this is geeksforgeeks where"+
        //                     " students learn programming"))