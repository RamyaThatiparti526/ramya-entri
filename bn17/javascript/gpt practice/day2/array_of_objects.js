// Array of objects representing people
var people = [
  { name: "John", age: 25, city: "New York" },
  { name: "Alice", age: 30, city: "San Francisco" },
  { name: "Bob", age: 22, city: "Los Angeles" },
  { name: "Eva", age: 28, city: "Chicago" },
];

// Accessing individual objects in the array
console.log(people[0]); // { name: 'John', age: 25, city: 'New York' }
console.log(people[1]); // { name: 'Alice', age: 30, city: 'San Francisco' }

// Accessing properties of an object in the array
console.log(people[2].name); // 'Bob'
console.log(people[3].age); // 28

// In this example, people is an array containing four objects, each representing a person with properties like name, age, and city. You can access individual objects in the array using index notation (people[0]), and you can access specific properties of an object using dot notation (people[2].name).
