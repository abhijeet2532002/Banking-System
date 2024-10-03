import express from'express';
import database from'./config/MongooseConfig.js';
import router from './router/Main_Router.js';
import dotenv from 'dotenv';
import swaggerDocs from './config/Swagger/Swagger.js'; 

dotenv.config();
const port = process.env.PORT;

const app = express();
const db = new database();
swaggerDocs(app); 

app.use('/',router);
app.listen(port,() => {
    console.log("App Is Running On  ",port);
})