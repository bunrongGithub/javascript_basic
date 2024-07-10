function restObject(objects , ...props){
    const [b ,d] = [...props]
    const newObject = {};
    for(let key in objects){
        if(![b].includes(key) && ![d].includes(key)){
            newObject[key] = objects[key];
        }
    }
    return newObject;
}
const object = {a: 1, b: 2, c: 3, d: 4};
console.log(restObject(object, "b","d"));

