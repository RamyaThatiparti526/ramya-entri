
// **7. Count Digits in a Number:**
// Write a program to count the number of digits in a given number `n` using a `for` loop.



const n = 12345
;
let count = 0;
let temp = n;
while (temp !== 0) {
  count++;
  temp = Math.floor(temp / 10);
}
console.log(count); 
