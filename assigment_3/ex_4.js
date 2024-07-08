const fs = require("fs")
function writeFile(filePath , content,callback){
    fs.writeFile(filePath , content , (err)=>{
        if(err){
            callback(err);
        }else{
            callback(null , `File ${filePath} has been write successfully!`)
        }
    });
}
const filePath = "newFiles.txt";
const content  = 'Hello, this is the content to be written to the file.';
const writeCallBack = (error,result) =>{
    if(error){
        console.log(error);
        return;
    }else{
        console.log(result)
    }
}
writeFile(filePath , content , writeCallBack)

module.exports = {writeFile}
