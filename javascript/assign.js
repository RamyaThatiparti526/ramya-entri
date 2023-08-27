const name1 ='Robin singh';
const truncate_string= name1.slice(0,4);
console.log(truncate_string);
const truncate_string1=name1.slice(6);
console.log(truncate_string1);
//////////////////////////////////////////////////////////////////////////////////////////////////////////

abbrev_name = function (str1) {
    var split_names = str1.trim().split(" ");
    if (split_names.length > 1) {
        return (split_names[0].charAt(0) + " " + split_names[1].charAt(0) + ".");
    }
    return split_names[0];
};
console.log(abbrev_name("Ramya thatiparti"));


////////////////////////////////////////////////////////////

/*const mailid ='ramyathatiparti@gmail.com';*/

protect_email = function (user_email) {
    var avg, splitted, part1, part2;
    splitted = user_email.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "...@" + part2;
};

console.log(protect_email("ramya_thatiparthi@gmail.com"));

///////////////////////////////////////////////////////////////////////////////
let name3='ramyatatiparti';
name2=name3.toUpperCase().charAt(0);
name4=name2+name3.slice(1);
console.log(name4);

///////////////////

let namep='RAMYATHATIPARTI';
name2=namep.toLowerCase().charAt(0);
namee=name2+namep.slice(1);
console.log(namee);
///////////////////////////////////////
let fruits=[]


