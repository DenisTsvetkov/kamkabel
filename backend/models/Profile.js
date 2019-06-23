const Sequelize = require("sequelize");

module.exports = class Profile extends Sequelize.Model {
    
    static init(sequelize, DataTypes) {
        return super.init(
            {
                UserId: DataTypes.INTEGER,
                name: DataTypes.STRING,
                middle_name: DataTypes.STRING,
                surname: DataTypes.STRING,
                phone: DataTypes.STRING,
                sex: DataTypes.STRING
            },
            {
                sequelize
            }
        );
        
    }

    static associate(models) {

    }
}
