"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("Users"),
      [
        {
          firstName: "Josefino",
          lastName: "Alves",
          email: "teste@josefino.com",
          password: "123456789",
        },
        {
          firstName: "Josefina",
          lastName: "Faria",
          email: "teste@josefina.com",
          password: "123456789",
        },
      ];
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("Users", null, {});
  },
};
