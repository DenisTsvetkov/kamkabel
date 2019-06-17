const { User, Avatar } = require('../models');

exports.findAll = (req, res) => {

    console.log('Пришёл запрос')

    User.findAll({
        include: 
            [
                {
                    model: Avatar,
                    as: 'Avatar'
                }
            ]
        }
    )
    .then(users => {
        // const result = {};
        // result.users = JSON.parse(JSON.stringify(clients));
        // result.Sidebar = req.Sidebar;
        // console.log(result);
        res.json(users);
    })
}


exports.findById = (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    User.findOne({
        where: { id },
        include: 
            [
                {
                    model: Avatar,
                    as: 'Avatar'
                }
            ]
    })
    .then(user => {
        if(!user){
            res.status(404).json({ detail: 'User not found' });
        }
        else {
            res.status(200).json(user);
        }
    })
}

exports.create = (req, res) => {
    console.log(`Пришли данные`, req.body);
    const { chat_id, name, surname, username } = req.body;
    User.findOrCreate({
        where:{
            chat_id, name, surname, username
        },
    })
    .then(result=>{
        const user = result[0], created = result[1];
        if(!created){
            console.log(`Пользователь ${user.get('name')} ${user.get('surname')} уже существует`);
            res.send({
                msg: 'User already exist'
            });
            return user;
        }
        console.log(`Пользователь ${user.get('name')} ${user.get('surname')} успешно добавлен в базу`);
        res.status(200).send({ msg: 'User create' });
        return user;
    })
};