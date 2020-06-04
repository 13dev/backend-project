const Sequelize = require('sequelize')
const MalwareModel = require('./malware')

const sequelize = new Sequelize('database.db', null, null, {
    storage: './database-dev.sqlite3',
    dialect: 'sqlite',
})

const Malware = MalwareModel(sequelize, Sequelize);

module.exports = {
  Malware,
};