const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const UserState = require('./UserState');
const Answer = require('./Answer');

//sequelize.sync({force: true})

const models = {
    UserState: UserState.init(sequelize, Sequelize),
    Answer: Answer.init(sequelize, Sequelize)
};

Object.values(models)
  .filter(model => typeof model.associate === "function")
  .forEach(model => model.associate(models));

const db = {
    ...models,
    sequelize
};

module.exports = db;