const Sequelize = require('sequelize');
const { DB_HOST, DB_DATABASE, DB_USER, DB_PASS, DB_DIALECT } = process.env;

module.exports =  new Sequelize(DB_DATABASE, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: DB_DIALECT
});