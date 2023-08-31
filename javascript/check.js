function leapyear(year){

    if ((year%4==0 && year%100!=0 ) || year%400==0){
        return 'leap year';
    }
    else{
    return'not leap year';
    }
    }
    let year=2004;
    console.log(leapyear(year));