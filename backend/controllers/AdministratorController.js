const { Administrator, Avatar, Auth_data } = require('../models');

exports.findAll = async (req, res) => {
    try{
        const administrators = await Administrator.findAll({
            include: 
                [
                    {
                        model: Avatar,
                        // as: 'Avatar'
                    },
                    {
                        model: Auth_data,
                    }
                ],
                order: [
                    ['createdAt', 'ASC']
                ]
            }
        )
        console.log('admins: ', administrators);
        
            res.status(200).json({ result: { administrators }, error: null })
        
    }
    catch(error){
        console.log('Произошла ошибка: ', error.message);
    }
}

exports.create = async ({ body: { name, surname } }, res) => {
    try{
        const createdAdministrator = await Administrator.create({ name, surname })
        if(createdAdministrator){
            return res.status(200).json({ result: { administrator: createdAdministrator }, error: null })
        }
        return res.status(404).json({ result: null, error })
    }
    catch(error){
        console.log('Произошла ошибка ', error);
    }
}

exports.findByObjectField = async({ body: { field } }, res) => {
    try{
        const findAdministrator = await Administrator.findOne({ where: field })
        if(findAdministrator){
            return res.status(200).json({ result: { administrator: findAdministrator }, error: null })
        }
        return res.status(404).json({ result: null, error })
    }
    catch(error){
        console.log('Произошла ошибка ', error);
    }
}