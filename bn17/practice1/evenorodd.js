// function EvenorOdd(x) {
//   if (x % 2 == 0) {
//     console.log("It is even number");
//   } else {
//     console.log("It is Odd number");
//   }
// }

// EvenorOdd(8);

// const car = {
//   brand: "Mahindra",
//   Model: "XUV 300",
//   Color: "Aqua Marine",
// };
// console.log(car.brand);
// console.log(car.Model);

// const book={
// titile: "APj Abdul kalam";
// pages:200;
// author:"kalam":
// }
// console.log('title  $(this.author)');

// let book = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   pages: 180,
// };

let book1 = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  pages: 281,
  getInfo: function () {
    return `${this.title} by ${this.author}, ${this.pages} pages`;
  },
  read: function () {
    console.log(`You are now reading ${this.title}`);
  },
};

console.log(book1.getInfo());

book1.read();

console.log(book1.title);
console.log(book1.author);
console.log(book1.pages);
