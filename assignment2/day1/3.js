// **3. Fibonacci Sequence:**
// Generate and print the first `n` terms of the Fibonacci sequence using a `for` loop.


// let sum=0;
// let first=0,second=1,next;
// const n=7;
// console.log(first);
// console.log(second);

// for(let i = 2; i < n; i++){
//     next=first+second;
//     console.log(next);


//     first=second;
//     second=first;
// }
const n = 9;
let first = 0, second = 1, third=2;
console.log(first); 
console.log(second); 
for (let i = 2; i < n; i++) {  
    next = first + second;
    
    console.log(next);
    first=second;
    second=next;

}