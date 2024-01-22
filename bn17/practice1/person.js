// Sample object
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  address: {
    city: "New York",
    country: "USA",
  },
};

// Adding a new property
person.email = "john.doe@example.com";

// Updating a property
person.age = 26;

// Nested object manipulation
person.address.zipCode = "10001";

// Removing a property
delete person.lastName;

// Iterating through object properties
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Check if a property exists
if ("firstName" in person) {
  console.log("firstName exists in the person object");
}

// Copying an object (shallow copy)
let personCopy = Object.assign({}, person);

// Deep copy using JSON methods
let personDeepCopy = JSON.parse(JSON.stringify(person));

console.log(person);
console.log(personCopy);
console.log(personDeepCopy);
