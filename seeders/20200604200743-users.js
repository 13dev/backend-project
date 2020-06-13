"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users',
      [
        {
          firstName: "Josefino",
          lastName: "Alves",
          email: "teste@josefino.com",
          password: "123456789"
        },
        {
          firstName: "Josefina",
          lastName: "Faria",
          email: "teste@josefina.com",
          password: "123456789"
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
