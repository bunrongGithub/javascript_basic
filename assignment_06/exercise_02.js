const { readFileContent } = require("../assigment_3/ex_3")
const { writeFile } = require("../assigment_3/ex_4")

/** simple promise */
const getFileContent = () =>{
    return new Promise((resolve,rejects)=>{
        readFileContent("./file.txt" , (e , r)=> e ? rejects(e) : resolve(r))
    })
}
//getFileContent().then( r => console.log("File content is: " + r)).catch( e => console.error(e))

/** promise with async / await */
const getFileContentAsync = async () =>{
    await readFileContent("./file.txt" , (e , r)=> {
        try {
            r ? console.log("file content with asyns " +r): e;
        } catch (error) {
            e ? console.error(e) : '';
        }
    })
}
//getFileContentAsync().then(res => res).catch(e => new Error(e))
/** Promise chain */
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
//promise().then(response => response).catch(err => console.error(err));

/** async / await with promise chain  */
const readFileAndReadFile = async () =>{
    await readFileContent("./file.txt" , async (e , r)=> {
        try {
            await writeFile("newFileContent.txt" , "after reading then writing -> \n" + r , async (e , d)=>{
                const result = await d;
                return result ? true : false;
            })
        } catch (error) {
            e ? console.error(e) : '';
        }
    })
}
readFileAndReadFile();
