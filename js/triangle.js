/*{
    function drawTriangle(build){  //function, takes in a par row(specifies the no. of rows)
        for (let i=1; i<= build; i++){  //outerloop.runs from 1-rows.4each iteration a new line of the tri is created
            let line ="";
            for (let p=1; p<=i; p++){
                line += p;     // runs from 1-current value of outerloop(i). 4each iteration, it appends the currentvalue to pstring
            }  
            
        }
        console.log(line);   // to print the line
    }
drawTriangle(10)      //draw tri with 10 rows
}*/
function drawTriangle(height) {
    for(let i = 1; i <= height; i++) {
        let row = "";
        for(let j = 1; j <= i; j++){
            row +=j;
        }
        console.log(row);
    }
}
drawTriangle(10);