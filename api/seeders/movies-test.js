module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movies', [{
      id: '024978dc-091f-43fc-9584-c1954cea2cd8',
      title: 'Movie 1',
      url: 'youtube.com',
      sharedBy: '215c8c34-4e50-422a-945e-6f3246842639'
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movies', null, {});
  }
};