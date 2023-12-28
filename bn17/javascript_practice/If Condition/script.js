alert("Hello, Ramya");

let userAge = prompt("Please enter your age:", "30");
let isConfirmed = confirm("Is the entered age correct?");

if (userAge >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
