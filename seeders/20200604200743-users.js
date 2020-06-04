"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Josefino",
          lastName: "Alves",
          email: "teste@josefino.com",
          password: "123456789",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          firstName: "Josefina",
          lastName: "Faria",
          email: "teste@josefina.com",
          password: "123456789",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
