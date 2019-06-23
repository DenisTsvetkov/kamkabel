const Sequelize = require("sequelize");

module.exports = class Notification extends Sequelize.Model {
    
    static init(sequelize, DataTypes) {
        return super.init(
            {
                Notification_typeId: DataTypes.INTEGER,
                Notification_statusId: DataTypes.INTEGER,
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
    }
}