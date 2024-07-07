const fs = require('fs');
function writeFileContents(filePath, content, callback) {
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            callback(err);
        } else {
            callback(null, `File "${filePath}" has been successfully written.`);
        }
    });
}
const filePath = 'file.txt'; 
const fileContent = 'Hello, this is the content to be written to the file.';
writeFileContents(filePath, fileContent, (err, result)=>{
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log(result);
    }
});
