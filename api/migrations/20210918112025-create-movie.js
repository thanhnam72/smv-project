'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(36)
      },
      title: {
        type: Sequelize.STRING(100)
      },
      url: {
        type: Sequelize.STRING(255)
      },
      sharedBy: {
        type: Sequelize.STRING(36)
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Movies');
  }
};