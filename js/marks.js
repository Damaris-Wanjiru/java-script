// 100-85 A
// 84-70 B
//69-60 C
//59-50 D
// BELLOW 49 E

{
    let marks;
    let grades = B;

    if (grade >= A){
        marks = "85"
    }else if (grade >= B){
        marks = "70"
    }else if (grade >= C){
        marks = "60"
    }else if (grade >= D){
        marks = "50"
    }else {
        "grade E marks is 49"
    }
    console.log(marks)
}

// get sum of numbers between 1 and n
{
    let sumofnumbers;
    let sum = 0;
    
    if(n<=0){
        return 0;
    }else if (n==1){
        return 1;
    }else {
        ("p =1; p <= n; p++") 
            sum += p;

    }
    console.log(sumofnumbers(5));
}