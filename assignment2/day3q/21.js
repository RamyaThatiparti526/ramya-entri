
// 21. Write a function `findUnique` that takes two arrays as input and returns an array containing elements that are unique to each input array (i.e., not common between them).

//     **Example:**
//     ```javascript
//     const inputArray1 = [1, 2, 3, 4, 5];
//     const inputArray2 = [3, 4, 5, 6, 7];
//     const output = findUnique(inputArray1, inputArray2);
//     console.log(output); // [1, 2, 6, 7]
// function findUnique(array1,array2){
// for(let i=0;i<array2.length;i++){
//  let arr_length=array1.length;
//     for(let j=0;j<arr_length;j++){
//         if(array1[j]!==array2[i])
//         return array1[j];

//         else(array2[i]!==array1[j])
//         return array2[i];
//     }
  
    
//    }
// }
// let array1=[1,2,3,4,5];
// let array2=[1,3,4,5,6,7];
// console.log(findUnique(array1,array2));


// function Removevalarrays(array1,array2) 
//{
// for (let i = 0; i<array2.length; i++) {
//     let arrlen = array1.length;
//     for (let j = 0; j<arrlen; j++) {
//         if (array2[i] == array1[j]) {
//             array1 = array1.slice(0, j).concat(array1.slice(j+1, arrlen));
//         }
//     }
// }
// return array1;
// }

// let array1 =  [1, 2, 3, 4, 5];
// let array2 = [3, 4, 5, 6, 7];

// console.log(Removevalarrays(array1,array2));

function Removevalarrays(array1,array2){
    let array3=[...new Set([...(array1.filter(a=>!array2.includes(a))),...(array2.filter(b=>!array1.includes(b)))])];
    return array3;
}
let array1=[1,2,3,4,5];
let array2=[3,4,5,6,7];
console.log(Removevalarrays(array1,array2));


