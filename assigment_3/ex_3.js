const fs = require('fs');
function readFileContents(filePath, callback) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            callback(err);
        } else {
            const fileContents = data.toString();
            callback(null, fileContents);
        }
    });
}

const filePath = 'file.txt';
function handleFileContents(err, contents) {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File contents:');
        console.log(contents);
    }
}
readFileContents(filePath, handleFileContents);
