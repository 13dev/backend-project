const config = require('./config');

module.exports = {
    dialect: config.DB.DIALECT,
    storage: config.DB.STORAGE
};