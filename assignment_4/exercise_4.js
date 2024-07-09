const date = ["2024-01-01","2024-02-02","2024-04-04"];

const newDateFormat = date.map((value,index)=>{
    let [yyyy,mm,dd] = value.split("-")
    return `${dd}/${mm}/${yyyy}`
})

console.log(newDateFormat)