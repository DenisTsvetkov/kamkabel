const Sequelize = require('sequelize');

module.exports = class State extends Sequelize.Model {

    static init(sequelize, DataTypes) {
        return super.init(
            {
                chatId: {
                    type: DataTypes.INTEGER,
                    unique: true
                },
                step: DataTypes.INTEGER
            },
            {
                sequelize
            }
        );
    }

    static associate(models) {
        //this.hasOne(models.Task);
        this.hasOne(models.Answer);
    }
}