const Sequelize = require('sequelize');

module.exports = class Avatar extends Sequelize.Model {

    static init(sequelize, DataTypes) {
        return super.init(
            {
                avatar: DataTypes.STRING
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
