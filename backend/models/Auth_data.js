const Sequelize = require('sequelize');

module.exports = class Auth_data extends Sequelize.Model {

    static init(sequelize, DataTypes) {
        return super.init(
            {
                AdministratorId: DataTypes.INTEGER,
                login: DataTypes.STRING,
                password: DataTypes.STRING
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
