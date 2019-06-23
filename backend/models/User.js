const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
    
    static init(sequelize, DataTypes) {
        return super.init(
            {
                chatId: DataTypes.INTEGER,
                username: { 
                    type: DataTypes.STRING,
                    unique: true
                }
            },
            {
                sequelize
            }
        );
        
    }

    static associate(models) {
        this.hasOne(models.UserAvatar);
        this.hasMany(models.Message);
        this.hasOne(models.Profile);
    }
}
