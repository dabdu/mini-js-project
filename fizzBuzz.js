function fizzBuzz(num) {
  let output;

  if (typeof num !== "number") {
    output = "Not a Number";
  }else{
    if(num % 5 === 0 && num % 3 === 0){
        output = "FizzBuzz";
    }else if(num % 5 === 0){
        output ="buzz";
    }else if(num % 3 === 0){
        output = "Fizz";
    }else {
        output = num;
    }
  }

  return output;
}

// console.log(fizzBuzz(25));

