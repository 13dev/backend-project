"use strict";

module.exports = {
  up: (queryInterface) => {
    queryInterface.bulkInsert(
      "Users",
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
      ],
      {}
    );
  },

  down: (queryInterface) => {
    queryInterface.bulkDelete("Users", null, {});
  },
};
