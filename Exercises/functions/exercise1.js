function sum(array){
   if(Array.isArray(array)) return true

    total = 0;
    for(let index of arguments)
        total += index;
    return total
}

console.log(sum(1,3,4,5,3,2))