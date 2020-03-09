import express from 'express';
import cors from 'cors';

import appConfig from '../../config';
import databaseConfig from './config/database';
import apiRouter from './router';

import MysqlConnection from '../core/MysqlConnection';

if (appConfig.runMysql && !MysqlConnection.getInstance(databaseConfig)) {
    throw new Error('Cannot initialize database.');
}

const app = express();

app.listen("8080", function() {
    console.log('app started');
});
app.use(cors());
app.use('', apiRouter);

export default app;
