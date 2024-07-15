const flatArray = [[1,2],[3,4],[5,6]]

const reduce = flatArray.reduce((accum,current)=> accum.concat(current),[])
console.log(reduce);