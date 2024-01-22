//string length-------
let text = "Thatiparti";
console.log(text.length);
// There are 4 methods for extracting string characters:

// The at(position) Method------

let name4 = "chantan reddy";
console.log(name4.at(4));

let name5 = "aryan reddy";
console.log(name5.at(-7));
// --------It allows the use of negative indexes while charAt() do not.

//----- Now you can use myString.at(-2) instead of charAt(myString.length-2).

// The charAt(position) Method-------
let name1 = "ramya thatipathi";
let char = name1.charAt(1);
console.log(char);

// The charCodeAt(position) Method-------
//The method returns a UTF-16 code (an integer between 0 and 65535).

let name2 = "shamith reddy";
console.log(name2.charCodeAt(0));

let name3 = "Harshit reddy";
console.log(name3.charCodeAt(0));

// Using property access [] like in arrays-------
//---- It makes strings look like arrays (but they are not)
// ----If no character is found, [ ] returns undefined, while charAt() returns an empty string.
// ---It is read only. str[0] = "A" gives no error (but does not work!)

let name8 = "swetha punnam";
console.log(name8[4]);
////////////////////////////////////////////////////////////

///----------extracting string parts-----------

// slice(start, end);

let text1 = "apple, banana, kiwi";
console.log(text1.slice(7, 13));
console.log(text1.slice(-12, -6));
console.log(text1.slice(-7));

// substring(start, end);
// ----------The difference is that start and end values less than 0 are treated as 0 in substring().
let text2 = "Apple, Banana, Kiwi";
console.log(text2.substring(7, 13));

// substr(start, length);

let text3 = "ramya, eswar,divya,manish, naveen";
console.log(text3.substr(0, 12));
console.log(text3.substr(-6));

// to.UpperCase..to.LowerCase

let text4 = "Hello World!";
let text5 = text4.charAt(0).toUpperCase() + text4.slice(1);
console.log(text5);
let text6 = text4.charAt(0).toLowerCase() + text4.slice(1);
console.log(text6);

let text7 = "Hello";
let text8 = "World";
// let text9 = text7.concat(" ", text8);
let text9 = text7.concat(text8);
console.log(text9);
