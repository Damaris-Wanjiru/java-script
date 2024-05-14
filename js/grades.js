//A 85 - 100
//B 70 - 84
//C 60 - 69
//D 50 - 59
//E BELLOW 50

{
    let grade;
    let mark = 87;

    if(mark >= 85){
        grade = "grade is A";
    }else if (mark >= 70){
        grade = "grade is B"
    }else if (mark >= 60){
       grade =  "grade is C"
    }else if (mark >= 50){
        grade = "grade is D"
    }else{
        grade = "grade is E";
    }
    console.log(grade)
    
}