//1)Write a JavaScript function to extract a specified number of characters from a string.
//Test Data :
//console.log(truncate_string("Robin Singh",4));
//"Robi"
const name1 ='Robin singh';
const truncate_string= name1.slice(0,4);
console.log(truncate_string);
const truncate_string1=name1.slice(6);
console.log(truncate_string1);
------------------------------------------------------------------------------------------------
//2)Write a JavaScript function to convert a string into abbreviated form.
//Test Data :
//console.log(abbrev_name("Robin Singh"));
//"Robin S."

abbrev_name = function (str1) {
    var split_names = str1.trim().split(" ");
    if (split_names.length > 1) {
        return (split_names[0].charAt(0) + " " + split_names[1].charAt(0) + ".");
    }
    return split_names[0];
};
console.log(abbrev_name("Ramya thatiparti"));
---------------------------------------------------------------------------
//3)Write a JavaScript function that hides email addresses to prevent unauthorized access.
//Test Data :
//console.log(protect_email("robin_singh@example.com"));
//"robin...@example.com"

const mailid ='ramyathatiparti@gmail.com';

protect_email = function (user_email) {
    var avg, splitted, part1, part2;
    splitted = user_email.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "...@" + part2;
};

console.log(protect_email("ramya_thatiparthi@gmail.com"));
------------------------------------------------------------------------------------------------
//4)Write a JavaScript function to capitalize the first letter of a string.
//Test Data :
//console.log(capitalize('js string exercises'));
//"Js string exercises"


let name3='ramyatatiparti';
name2=name3.toUpperCase().charAt(0);
name4=name2+name3.slice(1);
console.log(name4);

---------------------------------------------------------------------------------------------
//5)Write a JavaScript function to uncapitalize the first character of a string.
//Test Data :
//console.log(Uncapitalize('Js string exercises'));
//"js string exercises"

let namep='RAMYATHATIPARTI';
name2=namep.toLowerCase().charAt(0);
namee=name2+namep.slice(1);
console.log(namee);
----------------------------------------------------------------------------------------
//6)Write a function truncateText that takes a string and a maximum length as input and returns a
//truncated version of the string if it exceeds the maximum length, adding "..." at the end.


const fname = 'ramyathatiparti';
const truncate_string= fname.slice(0,5);
const lname= truncate_string+ "....";
console.log(lname);


//7)console.log(truncateText("This is a long sentence.", 10));
// Output: "This is a..."
//console.log(truncateText("Short text.", 15));
// Output: "Short text."

let text="This is a long sentence.";
const truncate_string= text.slice(0,10);
console.log(truncate_string + '........');
let smalltext="ramya";
const truncate_string1=smalltext.slice(0,15);
console.log(truncate_string1 );


// 8)Time of Day Greeting
// Write a function greetTimeOfDay that takes the current hour as input (in 24-hour format) and
// prints a greeting based on the time of day: "Good morning" for hours 6-11, "Good afternoon" for
// hours 12-17, and "Good evening" for hours 18-23.
const hour = new Date().getHours();
if (hour <12){
    console.log("good morning");
}
else if(hour < 18){
    console.log("good afternoon");
}
else {
    console.log("good evening");
}
console.log(hour);


const date = new Date();
const currentTime = date.getHours();


if (currentTime >= 6 && currentTime < 12) {
 console.log("Good Morning");
} 
else if (currentTime >= 12 && currentTime < 18)
 {
    console.log("good After Noon");
} 
else {
 console.log("Good Evening");
}
 ===============================================================================
//  9)Leap Year Check
//  Write a function isLeapYear that takes a year as input and prints "Leap year" if the year is
//  divisible by 4 and not divisible by 100, or if it's divisible by 400. Otherwise, print "Not a leap
//  year.

let year=2003;
if ((year%4==0 && year%100!=0 ) || year%400==0){
    console.log('leap year');
}
else{
console.log('not leap year')
}
// 10)Positive, Negative, or Zero
// Write a function positiveNegativeZero that takes a number as input and prints "Positive" if the
// number is greater than 0, "Negative" if it's less than 0, and "Zero" if it's equal to 0.
 
function num_p_n_z(x){
if(x>0){
return "positive";
}
else if(x<0){ return "negative";
}
else { return "zero"}
}
let x=-2
console.log(num_p_n_z(x));
// 11)Grade Calculator
// Write a function calculateGrade that takes a student's score as input and prints their
// corresponding grade: "A" for scores 90 and above, "B" for scores 80-89, "C" for scores 70-79,
// "D" for scores 60-69, and "F" for scores below 60.


function calculateGrade(score){
 if( score>=90)
 { return "A";}
 else if(score<=89 && score>=80)
 {return "B";}
 else if(score<=79 && score>=70)
 {return "C";}
 else if(score<=69 && score>=60)
 {return "D";}
 else(score<60)
 { return "F"}
}
let score =70;
console.log(calculateGrade(score));
//==================================================================================================

// 12)Even or Odd
// Write a function evenOrOdd that takes an integer as input and prints "Even" if the number is
// even, and "Odd" if the number is odd.

function evenOrOdd(x) {
    if(x%2 ==0){
        return "even";
    }

    else(x%2!=0) 
    { return "odd";}

}
 let x=9;
 console.log(evenOrOdd(x));

//  13)Age Eligibility
// Write a function checkAge that takes an age as input. The function should return "Allowed" if the
// age is between 18 and 65 (inclusive), and "Not allowed" otherwise.

function checkage(age){
    if(age>=18 && age<=65)
    {
        return "Allowed";
    }
    return "Not allowed";
}
let age=67;
console.log(checkage(age));

// 14)Ticket Pricing
// Write a function calculateTicketPrice that takes two parameters: a person's age and whether
// they have a student ID (true or false). If the person is under 18 or a student, they get a discount.
// If both conditions are met, return "Discounted price," otherwise return "Regular price."

function calculateTicketPrice(a,b){
if(a<18 && b==true)
{
   return "Discounted price";
}
else if(a<18 || b==true)
{ return " they get a discount.";}
else 
{return "Regular price";}
  
}

//let a=18; i have given input 18 we should enter it
//let b=true;i have given input 18 we should enter it
console.log (calculateTicketPrice (a,b));


// 15)Username Validation
// Write a function validateUsername that takes a username as input. The function should return
// "Valid" if the username has at least 6 characters and contains only letters and numbers.
// Otherwise, return "Invalid."

function validateUsername(text){
    if (text.length<=6)

    {return "Valid"}

    return "Invalid"
}
let text= "vinaynadide";

console.log(validateUsername(text));

// 16)Color Selection
// Write a function selectColor that takes a color choice ("red", "blue", "green") and whether the
// color is available (true or false). If the color is available and the choice is "blue" or "green,"
// return "Selected." If the choice is "red," return "Not available." For any other choice, return
// "Invalid choice."


function selectColor(x){

    if (x== "red"|| x=="blue" || x=="green"){
        return true;
    }
 
   else if(x=="blue" || x=="green")
   {
    return "selected";
   }
   else if(x=="red"){
    return "invalid";
    
   }


 }
 let x="blue";
 console.log(selectColor(x));




// 17) Adding and Removing Elements
// Create an array called `fruits` with initial values ["apple", "banana"]. Using the appropriate array
// methods, perform the following actions:
// - Add "orange" to the end of the array.
// - Remove the last element from the array.
// - Add "grape" to the beginning of the array.
// - Remove the first element from the array.
// Print the final array after each step.


let fruits =["apple" , "banana"];
console.log(fruits);
fruits.push("orange");
console.log(fruits);
fruits.pop(fruits.length-1);
console.log(fruits);
fruits.unshift("grape");
console.log(fruits);
fruits.splice(0,1);
console.log(fruits);

// 20): Shopping List
// Create an empty array called `shoppingList`. Using the appropriate methods, add the items
// "eggs", "milk", "bread", and "vegetables" to the shopping list. Then, remove the "bread" from the
// list.
// Print the shopping list after each operation.


let shoppingList= [];
shoppingList[0]="eggs";
shoppingList[1]="milk";
shoppingList[2]="bread";
shoppingList[3]="vegetables";
shoppingList.splice(2,1);
console.log(shoppingList);


// shoppingList.push("eggs","milk","bread","vegetables");
// console.log(shoppinglist);





 


