const Sequelize = require("sequelize");

module.exports = class Administrator extends Sequelize.Model {
    
    static init(sequelize, DataTypes) {
        return super.init(
            {
                name: DataTypes.STRING,
                surname: DataTypes.STRING
            },
            {
                sequelize
            }
        );
        
    }

    static associate(models) {
        this.hasOne(models.Avatar);
    }
}
