function calculateGrade(score){
    if( score>=90)
    { return "A";}
    else if(score<=89 && score>=80)
    {return "B";}
    else if(score<=79 && score>=70)
    {return "C";}
    else if(score<=69 && score>=60)
    {return "D";}
    else(score<60)
    { return "F"}
   }
  // let score =70; we have to check grades input is 70
   console.log(calculateGrade(score));

   