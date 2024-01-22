// function abc() {
//   console.log("iam inside abc");
// }
// console.log("hellow");
// setTimeout(abc, 5000);
// console.log("hi");
// console.log("hi");
// console.log("hi");
// console.log("hi");
// console.log("hi");

function abc() {
  console.log("iam inside abc");
}
console.log("hellow");
let interval = setInterval(abc, 1000);
console.log("hi");

function clear() {
  clearInterval(interval);
}
setTimeout(clear, 5000);
