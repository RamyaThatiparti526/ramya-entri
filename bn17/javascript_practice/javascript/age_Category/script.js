function checkAgeCategory(age) {
  if (age < 18) {
    console.log("You are a child");
  } else if (age >= 18 && age < 65) {
    console.log("You are an adult");
  } else {
    console.log("You are a senior");
  }
}

checkAgeCategory(66);
