
const mailid ='ramyathatiparti@gmail.com';

protect_email = function (user_email) {
    
    splitted = user_email.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "...@" + part2;
};

console.log(protect_email("ramya_thatiparthi@gmail.com"));

