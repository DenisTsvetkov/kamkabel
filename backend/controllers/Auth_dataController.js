const { Auth_data } = require('../models');

exports.create = async ({ body: { AdministratorId, login, password } }, res) => {
    try{
        const createdAuthData = await Auth_data.create({ AdministratorId, login, password })
        if(createdAuthData){
            return res.status(200).json({ result: { auth_data: createdAuthData }, error: null })
        }
        else{
            throw new Error('Error created Auth_data');
        }
        //return res.status(404).json({ result: null, error })
    }
    catch(error){
        console.log('Произошла ошибка ', error);
        return res.status(404).json({ result: null, error })
    }
}