function findLargestNumber(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    console.log(num1 + " is the largest number");
  } else if (num2 >= num1 && num2 >= num3) {
    console.log(num2 + " is the largest number");
  } else {
    console.log(num3 + " is the largest number");
  }
}

findLargestNumber(10, 5, 8);
findLargestNumber(1, 11, 18);
