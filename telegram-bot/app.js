require('dotenv').config();
const { bot } = require('./bot');
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');


const { UserRoute } = require('./routes'); 

const { UserController, BotController } = require('./controllers')

const app = express();

//For BodyParser
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Router
app.use('/users', UserRoute);


bot.start(BotController.start)


bot.launch()

const PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
    console.log(`Telegram bot working on ${PORT}`);
});