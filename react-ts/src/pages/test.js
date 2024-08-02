const person = {name: "jonh", 
    address:{
        country: "USA",
        city: {
            a:"a",
            b:"b"
        }
    }
}
const update = {...person ,
    address:{
        ...person.address, city:{
            ...person.address.city , a: "acbf"
        }
    },
    name: "ddddd"
}