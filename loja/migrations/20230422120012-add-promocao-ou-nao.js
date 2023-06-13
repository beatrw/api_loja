'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Produtos', 'emPromocao', {
      type: Sequelize.BOOLEAN,
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Produtos', 'emPromocao')
  }
};


