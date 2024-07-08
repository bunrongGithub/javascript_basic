// const fs = require('fs');
// function readFileContents(filePath, callback) {
//     fs.readFile(filePath,(err,data)=>{
//         if(err) {
//             callback(err);
//         }else{
//             const fileContents = data.toString();
//             callback(null,fileContents);
//         }
//     });
// }
// const filePath = 'file.txt';
// function handleFileContents(err,contents) {
//     if(err){
//         console.error('Error reading file:', err);
//     }else{
//         console.log('File contents:');
//         console.log(contents);
//     }
// }
// readFileContents(filePath, handleFileContents);
const fs = require('fs');
function readFileContent(filePath , callback){
    fs.readFile(filePath , (error , result)=>{
        if(error){
           callback(error)
        }else{
            const fileContent = result.toString();
            callback(null,fileContent)
        }
    })
}
const filePath = 'file.txt';
const handleFileContent = (error,content) =>{
    if(error){
        console.log(error);
        return;
    }else{
        console.log(content);
    }
}
readFileContent(filePath , handleFileContent)

module.exports = {readFileContent};