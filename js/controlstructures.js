{
    let x = 30;
    if (x < 50) {
        console.log("x is less than 50")
    }else{
        console.log("x is greater 50");
}

}

  


// find even numbers 
 {
     let x = 50;
    if (x % 2 == 0){
        console.log("x is even")
    }else {
        console.log("x is odd")
    }
    
 }
 //find if a number id divisible by 3
 {
    let number = 50;
    if(number % 3 == 0){
        console.log(number + "is divisible by 3")
    }else{
        console.log(number + "is not divisible by 3")
    }

 }

 {
    let greeting;
    let hour = 4;

    if ( hour < 3 ){
     greeting = "Good Night";
    }else if (hour < 12){
     greeting = "Good morning";
    }else if(hour < 16){
     greeting = "Good afternoon";
    }else{
     greeting = "Good evening";
    }
    console.log(greeting);
 }