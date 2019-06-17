const Sequelize = require('sequelize');
const db = require('../config/database');

module.exports = (sequelize, DataTypes) => {
    const User = db.define('User', {
        chat_id:{
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING
        },
        surname: {
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING
        },
        phone:{
            type: Sequelize.STRING
        }
    })
    
    User.associate = function(models){
        User.hasOne(models.Avatar, {as: 'Avatar', foreignKey: 'userId'})
    };

    User.sync({ alter: true })

    return User;
}