    //0 - 3 child  should be at home
    // 3 - 6 should be kindergarten
    //6-10 lower primary
    //10 - 14 upper primary
    //15 - 18 high school
    //18 - 24 campus
    //24 - 60 - employed
    // 60 120 retired

    {
        let age = 65;

        if(age >= 60){
           childsage = "is retired"
        }else if (age >= 24){
            childage = "is employed"
        }else if (age >= 15){
            childage = "is in campus"
        }else if (age >=15){
            childage = "is in highschool"
        }else if (age >= 10){
            childage = "is in upper primary"
        }else if (age >= 6){
            childage = "lower primary"
        }else if (age <= 3){
            childage = "should be in kindergarten"
        }else {
            "child should be at home"
        }
        console.log(age)

    }
    /*
    {
        let a = 1;
        a++
    }
    console.log(a)*/