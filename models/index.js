const Sequelize = require('sequelize')
const MalwareModel = require('./malware')
const config = require('../config').DB;

const sequelize = new Sequelize(null, null, null, {
    storage: config.STORAGE,
    dialect: config.DIALECT,
})

const Malware = MalwareModel(sequelize, Sequelize);

module.exports = {
  Malware,
};