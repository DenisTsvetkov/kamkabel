require('dotenv').config();

const { bot, telegram } = require('../bot');
const KamkabelService = require('../services/kamkabel-service');

const kamkabelService = new KamkabelService();

const _getAvatarUser = async (chatId) => {
    try{
        const createdAvatar = await telegram.getUserProfilePhotos(chatId)
        console.log('createdAvatar!!!', createdAvatar);
        const file_id = createdAvatar.photos[0][0].file_id;
        const getFile = await telegram.getFile(file_id)
        console.log('getFile!!!', getFile);
        const file_path = getFile.file_path;
        console.log('file_path!!!', file_path)
        const avatar = `https://api.telegram.org/file/bot${process.env.TOKEN}/${file_path}`;

        return avatar;
    }
    catch(error){
        throw new Error(error);
    }
}


exports.start = async (ctx) => {
    try {

        const { id, username, first_name, last_name } = ctx.message.from

        const createdUser = await kamkabelService.createUser(id, username)

        const { result, error } = createdUser;

        if(error){
            throw new Error(JSON.stringify(error.detail));
        }



        //const { id, chatId, username } = result.user;

        
        const avatar = await _getAvatarUser(result.user.chatId);

        const createdAvatar = kamkabelService.createAvatar(result.user.id, avatar);
        if(createdAvatar.error){
            throw new Error(JSON.stringify(createdAvatar.error));
        }
        
        const createdProfile = kamkabelService.createUserProfile(result.user.id, first_name, last_name);
        if(createdProfile.error){
            throw new Error(JSON.stringify(createdProfile.error));
        }

    
    }
    catch(error){
        console.log(`Произошла ошибка: `, error.message);
    }
}
