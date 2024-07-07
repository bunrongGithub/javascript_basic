const fs = require('fs');
const path = require('path');
function readFile(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
}
function writeFile(filePath, content, callback) {
    fs.writeFile(filePath, content, 'utf8', (err) => {
        if (err) {
            callback(err);
        } else {
            callback(null);
        }
    });
}
const inputFilePath = path.join(__dirname, 'file.txt');
const output1FilePath = path.join(__dirname, 'output1.txt');
const output2FilePath = path.join(__dirname, 'output2.txt');
readFile(inputFilePath, (err, data) => {
    if (err) {
        console.error('Error reading input.txt:', err);
    } else {
        const modifiedContent = data + 'First modification';
        writeFile(output1FilePath, modifiedContent, (err) => {
            if (err) {
                console.error('Error writing to output1.txt:', err);
            } else {
                console.log('Successfully wrote to output1.txt');
                readFile(output1FilePath, (err, data) => {
                    if (err) {
                        console.error('Error reading output1.txt:', err);
                    } else {
                        const furtherModifiedContent = data + 'Second modification';
                        writeFile(output2FilePath, furtherModifiedContent, (err) => {
                            if (err) {
                                console.error('Error writing to output2.txt:', err);
                            } else {
                                console.log('Successfully wrote to output2.txt');
                                readFile(output2FilePath, (err, data) => {
                                    if (err) {
                                        console.error('Error reading output2.txt:', err);
                                    } else {
                                        console.log('Contents of output2.txt:');
                                        console.log(data);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});
