

//function get_hours() 

const hour = new Date().getHours();
if (hour <12){
    console.log("good morning");
}
else if(hour < 18){
    console.log("good afternoon");
}
else {
    console.log("good evening")
}
console.log(hour);
//if (hour (6-12)){}
//welcomeText = welcomeTypes[0];
//else if (hour < 18) welcomeText = welcomeTypes[1];
//else welcomeText = welcomeTypes[2];
