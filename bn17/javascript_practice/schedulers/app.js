function abc() {
  console.log("I am inside abc");
}

console.log("Hello");
let Timeout = setTimeout(abc, 1000);
console.log("Hi");
clearTimeout(Timeout);
