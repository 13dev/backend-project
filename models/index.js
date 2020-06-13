const Sequelize = require('sequelize')
const MalwareModel = require('./malware')
<<<<<<< HEAD
const UserModel = require("./users")
=======
const UserModel = require('./users')
>>>>>>> 5be72ed0d75cdc1a9083711d2815ceb4b629c9d5
const config = require('../config').DB;

const sequelize = new Sequelize(null, null, null, {
  storage: config.STORAGE,
  dialect: config.DIALECT,
})

const Malware = MalwareModel(sequelize, Sequelize);
<<<<<<< HEAD
const Users = UserModel(sequelize, Sequelize);

module.exports = {
  Malware,
  Users
=======
const User = UserModel(sequelize, Sequelize);

module.exports = {
    Malware,
    User,
>>>>>>> 5be72ed0d75cdc1a9083711d2815ceb4b629c9d5
};