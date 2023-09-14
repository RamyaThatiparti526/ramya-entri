//let array= ()=>  { 
//let array=[5,0,1,1,2,2];
//let i=array[0];
 //   for(let i=array[0]; i < array.length; i++)
 //   {

 //       if (array[0]!==array[i+1]){

 //           return array[0]
//        }
    
 //   }
//}
//console.log(array[0]);

//let array1=[0,0,0,1,1,1,2,2,3,3,3,4,4,4]
//const withduplicates = array1;
//const withoutdup =unique(withduplicates);
//console.log(withoutdup);





const withDuplicates = [2, 2, 5, 5, 1, 1, 2, 2, 3, 3];
const withoutDuplicates = Array.from(new Set(withDuplicates));
const Duplicates = [...new Set(withDuplicates)];
console.log(withoutDuplicates)

