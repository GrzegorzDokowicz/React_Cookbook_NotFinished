import fs from 'fs';
import MysqlConnection from './api/core/MysqlConnection';
import appConfig from './config';


if (!MysqlConnection.getInstance(appConfig)) {
    throw new Error('Cannot initialize database.');
}

fs.readFile('./schema.sql', (error, data) => {
    if (error) {
        throw new Error('Cannot read schema sql.');
    }
    console.log(data);
    //MysqlConnection.getInstance().query()
});
