const Sequelize = require("sequelize");

module.exports = class UserAvatar extends Sequelize.Model {
    
    static init(sequelize, DataTypes) {
        return super.init(
            {
                UserId: DataTypes.INTEGER,
                avatar: {
                    type: DataTypes.STRING,

                }
            },
            {
                sequelize
            }
        );
        
    }

    static associate(models) {
        this.belongsTo(models.User);
    }
}
