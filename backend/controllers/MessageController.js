const { User, Message } = require('../models');
const BotService = require('../services/bot-service');

const TelegramBotService = new BotService();

const _createMessage = async (AdministratorId, UserId, text) => {
    try{
        const result = await Message.create({
            AdministratorId,
            UserId,
            text    
        })

        if (result){
            console.log('Сообщение успешно добавлено в базу данных')
        }
    }
    catch(error){
        console.log('В процессе добавления в базу данных произошла ошибка: ', error);
    }
}

exports.sendMessage = async (req, res) => {
    const _fetchResults = [];
    const { AdministratorId, messages } = req.body;

    messages.map(async ({ UserId, text })=>{
        try{
            const user = await User.findOne({
                where: {
                    id: UserId
                }
            })

            

            const { result, error } = await TelegramBotService.sendMessageToUser(user.get('chatId'), text);
            console.log('ОТВЕТ БОТА', { result, error });
            
            if(error){
                return res.status(200).json({ result: null, error: JSON.stringify(error) });
            }

            
             _createMessage(AdministratorId, UserId, text);
                //console.log(messageResult);
            return res.status(200).json({ result, error:null });
            
        }
        catch(err){
            console.log(typeof err);
            console.log(err.message);
            res.status(200).json({ result:null, error: err.message });
        }
        
    })

    

    // console.log(_fetchResults);
    
}

