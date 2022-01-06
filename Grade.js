const marks = [100, 50,100, 100];

console.log(calculateGrade(marks))

function calculateGrade(marks){
    let sum = 0;
    let subjects = marks.length;
    for(let mark of marks){
        sum += mark
    }
    averageMark = sum/subjects;

        if(averageMark <= 59) return  "F";
        else if(averageMark >=60 && averageMark <=69) return "D";
        else if(averageMark >=70 && averageMark <=79) return "C";
        else if(averageMark >=80 && averageMark <=89) return "B";
        else return  "A";
}