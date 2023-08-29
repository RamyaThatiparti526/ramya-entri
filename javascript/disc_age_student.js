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
    
    let a=18;
    let b=true;
    console.log (calculateTicketPrice (a,b));