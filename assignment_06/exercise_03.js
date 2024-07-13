const { readFileContent } = require("../assigment_3/ex_3")
const { writeFile } = require("../assigment_3/ex_4")
const filePath = './file.txt';
const promise = async () =>{
        await readFileContent(filePath ,async (e,r) => {
            await writeFile('./input.txt', r + ' hiiii' , (e,r) =>r )
        })
}
promise().then(res=>console.log(res)).catch(er=>console.log(er))
