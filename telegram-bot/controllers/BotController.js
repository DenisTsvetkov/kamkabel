import requestify from 'requestify';

exports.Welcome = (msg, bot) => {
    const nameUser = `${msg.chat.first_name}`;
    const welcomeText = `Здравствуйте, ${nameUser}. Вы успешно зарегистрировались! Для того, чтобы получить информацию, нажмите на кнопку ниже`
    var options = {
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [{ text: 'Получить инструкцию', callback_data: 'getInstructionFile'}]
        ]
      })
    };
    bot.sendMessage(msg.chat.id, welcomeText, options);
  }
  
// exports.CreateUser = async (msg) => {
//   console.log(msg)
//   const newTelegramUser = {
//     chat_id: msg.chat.id,
//     name: msg.chat.first_name,
//     surname: msg.chat.last_name,
//     username: msg.chat.username
//   }
  
//   requestify.post('http://localhost:8080/users/create', newTelegramUser)
//   .then((response)=>{
//       // Get the response body
//       console.log(response.getBody());
//   })
//   .catch(err=>console.log(`Ошибка: ${err}`));
// }
  
  
// exports.getInstruction = async (msg, bot)=>{

//   requestify.get('http://localhost:8080/documents/1')
//   .then((response)=>{
//     const file = response.getBody();
//     bot.sendDocument(msg.from.id, file);
//   })
//   .catch(err=>console.log(`Ошибка: ${err}`));
// }