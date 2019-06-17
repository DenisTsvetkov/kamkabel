require('dotenv').config();
import express from 'express';
import Telegraf from 'telegraf';
import TelegramBot from 'node-telegram-bot-api';

import route from './router/route';

// const bot = new TelegramBot(process.env.TOKEN, {polling: true});

const app = express();




const bot = new Telegraf(process.env.TOKEN);

bot.hears('hi', ctx => {
    console.log(ctx.message);
 return ctx.reply('Hey!');
});

bot.startPolling();


//route(bot);

const PORT = process.env.PORT || 7000;
app.listen(PORT, function(){
    console.log(`Telegram bot working on ${PORT} port`);
});

