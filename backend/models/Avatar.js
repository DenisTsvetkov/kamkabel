const Sequelize = require('sequelize');
const db = require('../config/database');

module.exports = (sequelize, DataTypes) => {
    const Avatar = db.define('Avatar', {
        userId: {
            type: Sequelize.INTEGER
        },
        photo: {
            type: Sequelize.STRING
        }
    })
    
    Avatar.associate = function(models){
        Avatar.belongsTo(models.User, {as: 'User', foreignKey: 'userId'})
    };

    Avatar.sync({ alter: true })

    return Avatar;
}