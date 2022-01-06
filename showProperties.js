// Exercise 7

const person = {
    FirstName: "Ibrahim",
    lastName: "dauda",
    age:    24,
    isUser: false
}

function showProperties(obj){
    for(let key in obj){
        if(typeof obj[key] === "string") console.log(key, obj[key])
        
    }
}

showProperties(person)