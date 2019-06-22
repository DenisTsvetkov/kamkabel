const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Administrator = require('./Administrator');
const Avatar = require('./Avatar');
const User = require('./User');
const UserAvatar = require('./UserAvatar');

//sequelize.sync({force: true})

const models = {
    Administrator: Administrator.init(sequelize, Sequelize),
    Avatar: Avatar.init(sequelize, Sequelize),
    User: User.init(sequelize, Sequelize),
    UserAvatar: UserAvatar.init(sequelize, Sequelize)
};

Object.values(models)
  .filter(model => typeof model.associate === "function")
  .forEach(model => model.associate(models));

const db = {
    ...models,
    sequelize
};

module.exports = db;