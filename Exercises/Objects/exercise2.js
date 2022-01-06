const address = initAddress("Compensation layout","Gwagwalada",902101)

// Factory Function
function initAddress(street,city,zip){
    return{
        street,
        city,
        zip
        }
}
console.log(address)

//COnstructor Function
const Address = new InitAddress("Compensation layout","Gwagwalada",902101);
console.log(Address)
function InitAddress(street,city,zip){
    this.street = street,
    this.city = city,
    this.zip = zip
}
