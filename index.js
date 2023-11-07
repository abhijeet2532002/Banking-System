import express from'express';
import database from'./config/MongooseConfig.js';
import router from './router/Main_Router.js';

const port = 9697;

const app = express();
const db = new database();

app.use('/',router);
app.listen(port,() => {
    console.log("App Is Running On PORT Number ",port);
})