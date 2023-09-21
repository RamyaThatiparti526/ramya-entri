
// 21. Write a function `findUnique` that takes two arrays as input and returns an array containing elements that are unique to each input array (i.e., not common between them).

//     **Example:**
//     ```javascript
//     const inputArray1 = [1, 2, 3, 4, 5];
//     const inputArray2 = [3, 4, 5, 6, 7];
//     const output = findUnique(inputArray1, inputArray2);
//     console.log(output); // [1, 2, 6, 7]
function findUnique(array1,array2){
for(let i=0;i<array1.length;i++){
    for(let j=i;j<array2.length;j++){
        if(array1[i]!==array2[j])
        return i;
    }
    elseif(array2[j]!==array1[i])
    return j;
   }
}
let array1=[1,2,3,4,5];
let array2=[3,4,5,6,7];
console.log(findUnique(array1,array2));
