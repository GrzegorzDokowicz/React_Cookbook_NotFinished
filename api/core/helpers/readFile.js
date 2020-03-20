import fs from "fs";

const readFile = file => new Promise((resolve, errorCallback) => {
    fs.readFile(file, 'utf8', (error, data) => {
        if (error) {
            errorCallback('Cannot read JSON data.');
        }

        resolve(data);
    });
});

export default readFile;
