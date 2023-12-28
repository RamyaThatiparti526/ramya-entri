function checkTriangleType(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    console.log("Equilateral triangle");
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("Isosceles triangle");
  } else {
    console.log("Scalene triangle");
  }
}

checkTriangleType(5, 5, 5);
checkTriangleType(4, 3, 4);
checkTriangleType(6, 4, 5);
