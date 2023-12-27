// for (let i = 0; i < 5; i++) {
//   console.log("The number is " + i);
// }
objects:let person = {
  firstName: "Ramya",
  lastName: "Doe",
  age: 25,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  };

// console.log(person.fullName());
// if (userAge >= 18) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a minor.");
// }

// alert("Hello, Ramya!");

// let userAge = prompt("Please enter your age:", "20");
// let isConfirmed = confirm("Is the entered age correct?");
// if (userAge >= 18) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a minor.");
// }
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]);