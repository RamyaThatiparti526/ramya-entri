


    function FirstLetter(str) {
        let words = str.split(' ');
        for (let i = 0; i <=words.length; i++) if(i%4==0){
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
        }
        return words.join(' ');
        }
        let str = "my name is ramya thatiparthi";
        console.log(FirstLetter(str));
     