const { bot, telegram } = require('../bot');

exports.sendMessage = ({ body: { chatId, text }}, res) => {
    telegram.sendMessage(chatId, text)
    .then(message => {
        res.status(200).json({ result:message, error: null });
    })
    .catch(error => {
        res.status(200).json({ result:null, error });
    })
}