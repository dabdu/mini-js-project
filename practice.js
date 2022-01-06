// Exercis One
console.log(maxNumber(2,4));

function maxNumber(num1, num2){
    let result;
    result = (num1 > num2 ) ? num1 : num2;
    return `The highhest Number is: ${result}`;
}


// Exercise Two

console.log(isLanscape(600,700));

function isLanscape(height, width){
    // return (width>height);
    result = (width>height) ? "Landscape" : "Potrait";
    return `This Image is: ${result}`;
}


// Exercise Three
console.log(fizzBuzz(29));

function fizzBuzz(number){
    if(number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
    if(number % 5 ===0) return "FIZZ";
    if(number % 3 === 0) return "BUZZ";
    return number;
}


// Exercise Four
console.log(checkSpeed(75));

function checkSpeed(speed){
    let speedLimit = 70;
    let pointPerSpeed = 5;

    if(speed < speedLimit + pointPerSpeed) return "Okay";
    points = Math.floor(speed - speedLimit) / pointPerSpeed;
    if(points >= 12) return "License Suspended";
    return `You Have ${points} Points`;
}

// Exercise Five
showNumber(5);

function showNumber(limit){
    for(let i =0; i<=limit; i++){
        let type = (i%2===0) ? '"EVEN"' : '"ODD"';
        console.log(`${i} ${type}`);
    }
}

// Exercise Six

// Exercise Seven

const Person = {
    firstName: "Ibrahim",
    lastName: "Dauda",
    age:        20,
    Gender:     "Male",
    isUser:     false
}

function showProperties(obj){
    for(let prop in obj)
        if(typeof obj[prop] === "string") console.log(`${prop} ${obj[prop]}`)
}
showProperties(Person);

// Exercise Eight 
console.log(sumMultiples(10))

function sumMultiples(limit){
    let sum = 0;
    for(let i = 0; i<=limit; i++)
        if(i%3 ===0 || i%5===0)
            sum += i;
    return sum;
}

// Exercise nine Calculating grades

// console.log(calculateGrade(calculateAverage(average)));

const marks = [80, 50, 70, 80];

function calculateAverage(array){
    let total =0;
    for(let mark of marks)
        total +=mark
    return total/marks.length;
}

function calculateGrade(marks){
    let average = calculateAverage(marks);

    if(average < 60) return "E";
    if(average < 70) return "D";
    if(average < 80) return "C";
    if(average < 90) return "B";
    return "A";
}
console.log(calculateGrade(marks))
// console.log(calculateAverage(marks))

// Exercise Ten
showStars(5);

function showStars(limit){
    for(let row =1; row<=limit; row++){
        let pattern ='';
            for(let i=1; i<=row; i++){
                pattern += "*";
            }
        console.log(pattern)
    }
}

// Exercise 10

// coverting callback function into arrow function

const Numbers = [1,-3,4,5,-8,9,3,-1,-3];

const filtered = Numbers.filter(value => {
    return value >= 0;
})

const joined = filtered.join('-');
console.log(joined)
const sorted = filtered.reverse();
console.log(sorted)
console.log(filtered)

const items =Numbers
.filter((number) => {return number>=0})
.map((obj) => ({value:obj}));
console.log(items)

let sum = 0;
for(let filter of filtered)
    sum += filter;
console.log(sum)