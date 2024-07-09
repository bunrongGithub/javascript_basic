const { readFileContent } = require("./ex_3");
const { writeFile } = require("./ex_4");

const input = "./input.txt";
console.log(`==========start=============`);
readFileContent(input , (er,data)=>{
        const first = data;
    writeFile('./output1.txt' , `First modification: ${first}` , (er,data)=>{
        console.log(`complete with this task`)
        readFileContent('./output1.txt',(er,data)=>{
            const second = data;
            writeFile('./output2.txt' , `Second modification: ${second}` , (er,data)=>{
                
            })
        })
    })
})
console.log(`stating with next task`)


