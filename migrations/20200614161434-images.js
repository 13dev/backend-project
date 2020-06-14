'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('images', {
        id: Sequelize.INTEGER,
        malware: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'images',
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
