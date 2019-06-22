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


const userStates = []

bot.use(session())

bot.start((ctx) => {
  ctx.session.state = 'USER_START';
  userStates[ctx.from.id] = {
    state: ctx.session.state
  }

  options = {
    reply_markup: {
      keyboard:[
          [
              {text: 'Написать письмо'},
              {text: 'Изменить данные'}
          ]
      ],
      resize_keyboard: true
    }
  }

  telegram.sendMessage(ctx.from.id, '', options);
  //avatar = `https://api.telegram.org/file/bot${token}/${file_path}`
})

bot.hears('Написать письмо', (ctx) => {
  ctx.session.state = 'USER_START_SEND_MESSAGE';

  userStates[ctx.from.id] = {
    state: ctx.session.state
  }

  telegram.sendMessage(ctx.from.id, 'Введите сообщение и отправьте', {});
  //avatar = `https://api.telegram.org/file/bot${token}/${file_path}`
})



bot.launch()


