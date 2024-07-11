const { readFileContent } = require("../assigment_3/ex_3")
const { writeFile } = require("../assigment_3/ex_4")

function promise() {
    return new Promise((resolve, rejects) => {
        try {
            readFileContent('./file.txt', (err, result) => {
                resolve(result)
                writeFile('./input.txt', result + " from modification file" , (err,result)=>{
                    console.log(`File write has been successfull!`);
                })
            })
        } catch (error) {
            rejects(err)
        }
    })
}
promise().then(response => response).catch(err => console.error(err));