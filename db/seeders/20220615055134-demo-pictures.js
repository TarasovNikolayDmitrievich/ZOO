module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Pictures', [{
      link: '6fe23fc57424d44e0a218a29824c9e60.jpg',
      animal_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      link: '45d967080526b031ce55c310a62912d3.jpg',
      animal_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      link: '60f79c837f73e2c874d2e4f7c5d3887b.jpg',
      animal_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      link: '0502d3c6448a1456ff6cc3d3cd573a20.jpg',
      animal_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      link: '91b9dc75152d6a8f00b57c27c64fe389.jpg',
      animal_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      link: '3600bf1740748da62ec49ac2abf425a1.jpg',
      animal_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      link: '610.1.jpg',
      animal_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      link: '610.2.jpg',
      animal_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      link: '610.3.jpg',
      animal_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      link: '610.4.jpg',
      animal_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      link: '01.jpg',
      animal_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      link: '02.jpg',
      animal_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      link: '03.jpg',
      animal_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      link: '04.jpg',
      animal_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      link: '6a8329d7fc4ad1280bb371e33d9554f8.jpg',
      animal_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      link: '752447ea43ab22c2d20670b72a772d93.jpg',
      animal_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      link: '062b8534416004aa55b82afff9009e16.jpg',
      animal_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      link: 'f85d12acc23cc75bd6420325e864c760.jpg',
      animal_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      link: '6a8329d7fc4ad1280bb371e33d9554f8.jpg',
      animal_id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      link: '0805bfe83bfce3a81dc560b0cbde779b.jpg',
      animal_id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      link: '8830cd471f0009c41667f9cfb4e504d1.jpg',
      animal_id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      link: 'e11d2a56c7e044912faa6c68e02d387f.jpg',
      animal_id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      link: 'e804e2d3618197eefef705ffcd1bd2c4.jpg',
      animal_id: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      link: '48ec140d5407c062dd2a54a850d5580e.jpg',
      animal_id: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      link: 'ab66417b81eae0a89581faf0b01cea37.jpg',
      animal_id: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      link: '269ea857ebe6909b8146941253376945.jpg',
      animal_id: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
