const string ='George Raymond Richard Martin'
const array = string.split(" ");
const result = array.map((item)=>{
    const [char] = item;
    const c = [char].reduce(([acc],[item])=>acc + item)
    return c;
}).join("")
console.log(result);