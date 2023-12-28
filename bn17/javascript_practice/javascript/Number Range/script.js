function checkNumberRange(number) {
  if (number >= 1 && number <= 100) {
    console.log(number + " is within the range of 1 to 100");
  } else {
    console.log(number + " is outside the range of 1 to 100");
  }
}

checkNumberRange(50);
checkNumberRange(101);
