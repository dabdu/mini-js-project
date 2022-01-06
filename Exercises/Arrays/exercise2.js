const numbers = [1,2,4,5,7];

function includes(array, searchElement){
    for(let elemt of array)
        if(elemt === searchElement)
            return true;
    return false
}

console.log(includes(numbers, 3))