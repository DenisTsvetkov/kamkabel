require('dotenv').config()

const express    = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';

// import { AdministratorRouter, UserRouter } from './routes';

const { AdministratorRoute, UserRoute } = require('./routes'); 

const app = express();

//For BodyParser
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Router
app.use('/users', UserRoute);
app.use('/administrators', AdministratorRoute);


// app.use(favicon(__dirname + '/public/img/favicon.ico'));

// // For Handlebars
// app.engine("hbs", expressHbs(
//     {
//         layoutsDir: "views/layouts", 
//         defaultLayout: "layout",
//         extname: "hbs",
//     }
// ))
// app.set("view engine", "hbs");


// app.use('/', express.static(__dirname+'/public/'));





// require(__dirname+'/router')(app, jwt);


const PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
    console.log(`Express server listening on port ${PORT}`);
});