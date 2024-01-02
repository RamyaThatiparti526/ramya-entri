function calculateBMI(height, weight) {
  var bmi = weight / (height * height);
  if (bmi < 18.5) {
    console.log("Underweight");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Normal weight");
  } else if (bmi >= 25 && bmi <= 29.9) {
    console.log("Overweight");
  } else {
    console.log("Obese");
  }
}

calculateBMI(1.75, 70);
calculateBMI(1.63, 80);
calculateBMI(1.85, 90);
calculateBMI(2.85, 90);
