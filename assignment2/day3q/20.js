// 20. Write a function `findIntersection` that takes two arrays as input and returns an array containing the elements that are common to both input arrays.

//     **Example:**
//     ```javascript
//     const inputArray1 = [1, 2, 3, 4, 5];
//     const inputArray2 = [3, 4, 5, 6, 7];
//     const output = findIntersection(inputArray1, inputArray2);
//     console.log(output); // [3, 4, 5]
    function findIntersection(arr1,arr2){
        let intersected=
        arr1.filter(x => arr2.includes(x));
        return intersected;
    }
    let arr1=[1,2,3,4,5];
    let arr2=[3,4,5,6,7];
    console.log(findIntersection(arr1,arr2));
