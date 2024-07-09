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
function getPersonInfo(person){
        return person.filter(item => item.age > 18);
}
console.log(
getPersonInfo(person)
)