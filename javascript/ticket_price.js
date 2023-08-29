function calculateTicketPrice(a,b){
    if(a<18 || b==true)
    {
       return "They get discount";
    }
    else if(a<18 && b==true)
    { return " Discounted price";}
    else 
    {return "Regular price";}
      
    }
    
    //let a=18; i have given input 18 we should enter it
    //let b=true;i have given input 18 we should enter it
    console.log (calculateTicketPrice (a,b));
    