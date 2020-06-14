'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('images', {
        id: Sequelize.INTEGER,
        malware_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'malwares',
            key: 'id'
          }
        },
        path: Sequelize.STRING(200),
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('images');
  }
};
