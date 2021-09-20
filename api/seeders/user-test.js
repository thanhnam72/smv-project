module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: '215c8c34-4e50-422a-945e-6f3246842639',
      username: 'test',
      email: 'bruno@doe.com',
      password: 'e10adc3949ba59abbe56e057f20f883e',
      token: '50201ece3c3773273858a663c30e78d5687c93ef720df407d5a390f4b3e3a6c2',
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};