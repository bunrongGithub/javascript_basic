function restObject(objects , ...props){
    const newObject = {};
    for(let key in objects){
        if(![...props].includes(key)){
            newObject[key] = objects[key];
        }
    }
    return newObject;
}
const object = {a: 1, b: 2, c: 3, d: 4};
console.log(restObject(object, "b","d"));

