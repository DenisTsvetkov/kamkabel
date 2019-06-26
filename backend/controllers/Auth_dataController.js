const { Auth_data } = require('../models');
const bcrypt = require('bcrypt');
const { cryptPassword } = require('../utils/crypt-password.js');

exports.create = async ({ body: { AdministratorId, login, password } }, res) => {
    try{
        const encryptPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
        const createdAuthData = await Auth_data.create({ AdministratorId, login, password: encryptPassword })
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