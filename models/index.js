const Sequelize = require('sequelize')
const MalwareModel = require('./malware')
const UserModel = require("./users")
const TypeModel = require("./types")
const ImageModel = require("./images")
const config = require('../config').DB;

const sequelize = new Sequelize(null, null, null, {
  storage: config.STORAGE,
  dialect: config.DIALECT,
})

const Malware = MalwareModel(sequelize, Sequelize);
const Users = UserModel(sequelize, Sequelize);
const Type = TypeModel(sequelize, Sequelize);
const Image = ImageModel(sequelize, Sequelize);

module.exports = {
  Malware,
  Users,
  Type,
  Image,
};