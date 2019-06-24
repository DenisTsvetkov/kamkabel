const Sequelize = require("sequelize");

module.exports = class Message extends Sequelize.Model {
    
    static init(sequelize, DataTypes) {
        return super.init(
            {
                AdministratorId: DataTypes.INTEGER,
                UserId: DataTypes.INTEGER,
                text: DataTypes.TEXT
            },
            {
                sequelize
            }
        );
        
    }

    static associate(models) {
        // this.belongsTo(models.Administrator);
        // this.belongsTo(models.User);
        this.belongsTo(models.User)
    }
}