
// let shoppingList= [];
// shoppingList[0]="eggs";
// console.log(shoppingList);
// shoppingList[1]="milk";
// console.log(shoppingList);
// shoppingList[2]="bread";
// console.log(shoppingList);
// shoppingList[3]="vegetables";
// console.log(shoppingList);
// shoppingList.splice(2,1);
// console.log(shoppingList);

const mailid ='ramyathatiparti@gmail.com';
function (user_email) {
    
    splitted = user_email.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "...@" + part2;
};

console.log(protect_email("ramya_thatiparthi@gmail.com"));