'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      
      await queryInterface.bulkInsert('Tariffs', [{
        adult_work: 500,
        adult_week: 800,
        child_work: 300,
        child_week: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
     }],);
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tariffs');
  }
};
