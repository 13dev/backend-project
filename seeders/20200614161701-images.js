'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('images', [
          {
            path: '12345.jpg',
            malware_id: 1,
          }
      ], {}
      );

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('images', null, {});
  }
};
