const Address = {
    street: "Compensation Layout",
    city:   "Gwagwalada",
    zipCode: 902101
}

function newAddress(d){
    for(let address in d)
        console.log(address, d[address])
 //   console.log(d.street);
 //   console.log(d.city);
  //  console.log(d.zipCode);
}

newAddress(Address)