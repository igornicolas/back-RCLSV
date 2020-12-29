/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const models = require('../app/models');

const connection = new Sequelize(dbConfig);

for (const m in models) {
  models[m].init(connection);
}

for (const m in models) {
  models[m].associate(connection.models);
}
console.log('Conexão estabelecida');

module.exports = connection;
