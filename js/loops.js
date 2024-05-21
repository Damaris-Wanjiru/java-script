{
    function getSum(n){
    let sum=0
    for(let i=0; i<=n; i++){
        sum=sum+i;
    }
    return sum;
}
console.log(getSum(10))
}

{
    function getNumbers(n){
        for(let i=0; i<=n; i+=3){
            console.log(i)
        }
       
    }
    getNumbers(20)
}
{
    function getNumbers(n){
        for(let i=0; i<=n; i--){
            console.log(i)

        }
    }
    getNumbers(5)
}


{
    function getMultiplesOf5And10(i){
        function findMultiplesOf5(num){
            return num % 5 === 0;
        }
        function FindMultiplesOf10(num){
            return num % 10 === 0;
        }
        for(let i=0; i<=n; i++){
            if(itIsMultiplesOf10(i)){
                console.log("is a multiple of 10")
            }else if(itIsMultiplesOf5(i))
            console.log("is a multiple of 5")
        }
    }
}


{
    let x = 0;
    while (x<=20){
        console.log(x)
        x++
    }
}
// to get the 
{
    const arr = [89, 89, 78, 54, 356, 89]
    let x =0;
    while(x<=arr.length){
        console.log(arr[x])
        x++
    }
    console.log(x)
}
//get the sum 
{
    let sum = 0;
    let number = 1;
    while(number <=10){
        sum + number;
        number++
    }
    console.log("sum of numbers from 1 to 10"+ number)
}
//get the sum 
{
    function getSum(arr){
        sum = 0;
        while(x<arr.length){
            sum = sum + arr[x];
            x++;
            
        }return sum;   
    }
    console.log(getSum(arr))
}