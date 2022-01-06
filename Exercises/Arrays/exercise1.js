function arrayRangeFromNumber(min, max){
    
    let numbers = [];
    // const items = numbers.slice(min, max);
    
    // console.log(items)


    for(let i=min; i<=max; i++){
        numbers.push(i)
    }

    return numbers;
    
}
console.log(arrayRangeFromNumber(10,20))