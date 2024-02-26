// A factory function that accepts 'name',
// 'age', and 'breed' parameters to return
// a customized dog object.
// const dogFactory = {
//   name: "Hira",
//   age: 2,
//   breed: "german shepard",
//   bark: function () {
//     console.log("Woof!");
//   },
// };
// dogFactory.bark();
// console.log(dogFactory.breed);
// let users = [
//   { firstName: "Susan", lastName: "Steward" },
//   { firstName: "Daniel", lastName: "Longbottom" },
//   { firstName: "Jacob", lastName: "Black" },
// ];

// let userFullnames = users.map(function (element) {
//   return `${element.firstName} ${element.lastName}`;
// });

// console.log(userFullnames);
// ["Susan Steward", "Daniel Longbottom", "Jacob Black"]
const persons = [
  { firstname: "Ramya", lastname: "Thatiparti" },
  { firstname: "Eswar", lastname: "Enukonda" },
  { firstname: "Naveen", lastname: "Nani" },
  { firstname: "Divya", lastname: "Basani" },
  { firstname: "Manish", lastname: "Kumar" },
];
persons.map(getFullName);
function getFullName(item) {
  return [item.firstname, item.lastname].join(" ");
}
console.log(persons.map(getFullName));

// let arr = [2, 3, 5, 7];

// arr.map(function (element, index, array) {
//   console.log(element);
//   console.log(index);
//   console.log(array);
//   return element;
// }, 80);

// let arr = [2, 3, 5, 7];
// arr.map(function (element, index, array) {
//   console.log(this); // 80
// }, 80);

// const randomNumbers = [4, 11, 42, 14, 39];
// const filteredArray = randomNumbers.filter((n) => {
//   return n > 5;
// });
// console.log(filteredArray);
