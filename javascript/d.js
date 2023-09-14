// const mailid ='ramyathatiparti@gmail.com';

// protect_email = function (user_email) {
//     var avg, splitted, part1, part2;
//     splitted = user_email.split("@");
//     part1 = splitted[0];
//     avg = part1.length / 2;
//     part1 = part1.substring(0, (part1.length - avg));
//     part2 = splitted[1];
//     return part1 + "...@" + part2;
// };

// console.log(protect_email("ramya_thatiparthi@gmail.com"));



// function user(Email){
// let Email = 'basanidivya2@gmail.com';
// let splitemail = Email.split("@");
// console.log(splitemail);
// let hideemail = splitemail[0].slice(0,6) + ".....@" + splitemail[1];
// console.log(hideemail);
// }

let year=2040;
function leapyear(year){

    if ((year%4==0 && year%100!=0 ) || year%400==0){
        return 'leap year';
    }
    else{
    return'not leap year';
    }
    }
   console.log(leapyear(year));