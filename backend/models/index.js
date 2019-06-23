const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Administrator = require('./Administrator');
const Avatar = require('./Avatar');
const User = require('./User');
const UserAvatar = require('./UserAvatar');
const Message = require('./Message');
const Auth_data = require('./Auth_data');
const Profile = require('./Profile');
const Notification = require('./Notification');

//sequelize.sync({force: true})

const models = {
    Administrator: Administrator.init(sequelize, Sequelize),
    Avatar: Avatar.init(sequelize, Sequelize),
    User: User.init(sequelize, Sequelize),
    UserAvatar: UserAvatar.init(sequelize, Sequelize),
    Message: Message.init(sequelize, Sequelize),
    Auth_data: Auth_data.init(sequelize, Sequelize),
    Profile: Profile.init(sequelize, Sequelize),
    Notification: Notification.init(sequelize, Sequelize)
};

Object.values(models)
  .filter(model => typeof model.associate === "function")
  .forEach(model => model.associate(models));

const db = {
    ...models,
    sequelize
};

module.exports = db;