require('dotenv').config();

const Telegraf = require('telegraf')
const Telegram = require('telegraf/telegram')
const session = require('telegraf/session')



const SocksAgent = require('socks5-https-client/lib/Agent');
const socksAgent = new SocksAgent({
  socksHost: process.env.PROXY_HOST,
  socksPort: process.env.PROXY_PORT,
  socksUsername: process.env.PROXY_USERNAME,
  socksPassword: process.env.PROXY_PASSWORD 

});

const bot = new Telegraf(process.env.TOKEN, { telegram: { agent: socksAgent }})
const telegram = new Telegram(process.env.TOKEN, { agent: socksAgent })

bot.use(session())



module.exports = {
    bot,
    telegram
}