
function checkage(age){
    if(age>=18 && age<=65)
    {
        return "Allowed";
    }
    return "Not allowed";
}
//let age=67; we should enter input value am given that 67
console.log(checkage(age));