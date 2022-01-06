const address1 = new CreateAddress("Compensation Layout", "Gwagwalada", 902101);
const address2 = new CreateAddress("Compensation Layout", "Gwagwalada", 902101);

function CreateAddress (street, city, zip){
    this.street = street,
    this.city = city,
    this.zip = zip
}

function areEqual(address1,address2){
    return address1.street === address2.street && address1.city === address2.city && address1.zip === address2.zip;
}

function areSame(address1, address2){
    return address1 === address2;
    
}

console.log(areEqual(address1, address2))
console.log(areSame(address1,address2))