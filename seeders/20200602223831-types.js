'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('types', [
          { typeName: "Muito perigoso", },
          { typeName: "Perigoso", },
          { typeName: "Normal", },
          { typeName: "Sem ofensa", },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('types', null, {});
  }
};
