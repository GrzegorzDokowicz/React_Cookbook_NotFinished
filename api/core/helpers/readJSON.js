import fs from "fs";

const readJSON = file => new Promise((resolve, errorCallback) => {
    fs.readFile(file, 'utf8', (error, data) => {
        if (error) {
            errorCallback('Cannot read JSON data.');
        }

        try {
            resolve(JSON.parse(data));
        } catch (error) {
            errorCallback(error);
        }
    });
});

export default readJSON;
