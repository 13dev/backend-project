const env = require("dotenv").config();

module.exports = {
  DB: {
    DIALECT: process.env.DB_DRIVER,
    STORAGE: "./" + (process.env.DB_STORAGE || "database.sqlite3"),
  },
};
