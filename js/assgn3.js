{
    function getAverage(students) {
        let studentAverages = []
        for (let i=0; i < students.length; i++){
            let student = students[i]
            let totalMarks = 0
            
            for (let k=0; k<student.marks.length; k++){
                totalMarks += student.marks[k]
            }

            let averageMarks = totalMarks / student.marks.length
            studentAverages.push({name: student.name, average: averageMarks})
        }
        studentAverages.sort(function(a,b){
            return b.avaerage - a.average;
        }) 
        for(let i=0; i < studentAverages.length; i++){
            let student = studentAverages[i]
            console.log(student.name + ":" + student.average.toFixed(i))
        }
    }
const arrayOfStudents = [
    {name:"Maryann", marks:[89,78,10,67,47]},
    {name:"Stephen", marks:[45,78,90,32,67]},
    {name:"Claire", marks:[44,68,88,62,77]},
    {name:"Kelvin", marks:[55,88,94,52,37]},
];
getAverage(arrayOfStudents)
}