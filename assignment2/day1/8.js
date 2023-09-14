// Write a program to print a pattern of stars using a `for` loop.
// let x=" ";
// for (let i=1;i<=5; i++){
   
//     for(let j=i;j<=i;j++)
//     x+= "*";
// console.log(x);
// }

const rows = 6;
for (let i = 1; i <= rows; i++) {
  let pattern = " ";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}
