const Sequelize = require('sequelize');

module.exports = class Answer extends Sequelize.Model {

    static init(sequelize, DataTypes) {
        return super.init(
            {
                UserStateId: DataTypes.INTEGER,
                answer: DataTypes.STRING
            },
            {
                sequelize
            }
        );
    }

    static associate(models) {
        //this.hasOne(models.Task);
    }
}