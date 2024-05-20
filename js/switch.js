/*//divisibility test
{
    let number = 9
    switch (number % 3){
        case 0:
        console.log(number + "is divisible by 3");
        break;
        default:
        console.log(number + "is not divisible by 3")
    }
}

{
    let a = 3
    switch(a){
        case 3:
            console.log("a is 3");
            break;
        case 5:
            console.log("a is five")
            break;
        case 10:
            console.log("a is 10")
            default:
            console.log("value is not found")
    }

}
{
    let maths = "pass";
    let english = "fail";
    let chemistry = "fail";
    let physics = "pass";
    let kiswahili = "fail";

    // computer science: maths or pass one of the languages
    // journlism: pass maths, english and kiswahili
    // engineer: maths, one of the languages and pass physics\
    // medicine: pass maths, pass one of the languages and pass chemistry
    //what happens if someone passes all subjects -> output of: you can chooose a course of your choice.
    // you are not able to do any course
    if((maths == "pass") && (english == "pass") && (kiswahili == "pass")){
        console.log("you can do journalism")
    }else if ((maths == "pass") && (english == "pass") || (kiswahili == "pass")){
        console.log("you can pursue computer science")
    }else if ((maths == "pass") && (physics == "pass") || (english == "pass")){
        console.log("you can pursue engeneering")
    }else if ((maths == "pass") && (chemistry == "pass") || (english == "pass")){
        console.log("you can pursue medicine")
    }else if ((maths == "pass") && (english == "pass") && (kiswahili == "pass") && ( chemistry == "pass") && (physics == "pass")){
        console.log("you can pursue a course of your choice")
    }else (
        console.log("you are not able to do any course")
    )



}*/