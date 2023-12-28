function checkVotingEligibility(age) {
  if (age >= 18) {
    console.log("You are eligible to vote");
  } else {
    console.log("You are not eligible to vote");
  }
}

checkVotingEligibility(17);
checkVotingEligibility(20);
