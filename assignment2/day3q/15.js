
// 15. Write a function `rotateArray` that takes an array and a number `k` as input and rotates the array to the right by `k` positions.

   // **Example:**
   // ```javascript
   // const inputArray = [1, 2, 3, 4, 5];
   // const k = 2;
   // const output = rotateArray(inputArray, k);
   // console.log(output); // [4, 5, 1, 2, 3]

   function rotatearrya1(nums, k){
      for(let i=0; i<k; i++){
         nums.unshift(nums.pop());
      }
      return nums;
   }
   let k=3;
   let nums=[1,2,3,4,5];
   console.log(rotatearrya1(nums, k));

//    const rotatearray2 =function(nums, k){ for(let i=0; i<k; i++){
//    nums.unshift(nums.pop());
//    }
//    return nums;
//   }
//    let k=3;
//    let nums=[1,2,3,4,5];
//    console.log(rotatearray2(nums, k));

   


