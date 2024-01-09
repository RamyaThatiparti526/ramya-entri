const person = {
  name: "Ramya thatiparti",
  dob: "10.08.1998.",
  qualification: "B.tech",
  job: " ",
  emailid: "ramyathatiparti@gmail.com",
  hobbies: {
    sports: "badminton",
    listen: "music",
  },
};
console.log("name: ", person.name);
console.log(person.dob);
console.log(person.qualification);
console.log(person.job);
console.log(person.emailid);
console.log(person.hobbies.sports);
console.log(person["name"]);

person.fname = "thatiparti";
console.log(person);
delete person.dob;
console.log(person);

const array1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  {
    name: "Ramya thatiparti",
    dob: "10.08.1998.",
    qualification: "B.tech",
    job: " ",
    emailid: "ramyathatiparti@gmail.com",
  },
];
console.log(array1[0]);
console.log(array1[3].name);
array1[3].lname = "thatiparti";
console.log(array1);
