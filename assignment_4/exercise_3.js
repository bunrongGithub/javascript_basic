const person = [
    {
        name:"Jonh Doe",
        age: 20
    },
    {
        name:"Jonh smillgar",
        age: 18
    },
    {
        name:"Jonh",
        age: 15
    }
]

const newPerson = person.map((value , index)=>value.name)
console.log(newPerson);