'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(36)
      },
      username: {
        type: Sequelize.STRING(100)
      },
      password: {
        type: Sequelize.STRING(200)
      },
      email: {
        type: Sequelize.STRING(100)
      },
      token: {
        type: Sequelize.STRING(200)
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};