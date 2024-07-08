const { readFileContent } = require("./ex_3");
const { writeFile } = require("./ex_4");

const input = "./input.txt";
readFileContent(input , (data)=>{
        const first = data;
        console.log(data);
        console.log(first);
    writeFile('./output1.txt' , `First modification: ${first}` , (data)=>{
        console.log(`File modify has been successfully! ${data}`);
        readFileContent('./output1.txt',(data)=>{
            const second = data;
            writeFile('./output2.txt' , `Second modification: ${second}` , (data)=>{
                console.log("File output2.txt -> " + data);
            })
        })
    })
})

