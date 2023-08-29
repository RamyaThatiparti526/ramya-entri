// 8)Time of Day Greeting
//Write a function greetTimeOfDay that takes the current hour as input (in 24-hour format) and
//prints a greeting based on the time of day: "Good morning" for hours 6-11, "Good afternoon" for
//hours 12-17, and "Good evening" for hours 18-23

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