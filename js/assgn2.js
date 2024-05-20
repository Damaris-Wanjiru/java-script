{
    function countVowels(name){
     let vowels = "aeiouAEIOU"
     let count = 0
     for(i=0; i < name.length; i++){
        if(vowels.includes(name [i])){
            count += 1;
        }
     }
     return count;

    }
    console.log(countVowels("AhmedDDamaris"))
}