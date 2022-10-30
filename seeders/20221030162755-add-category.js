'use strict';

/** @type {import('sequelize-cli').Migration} */
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
    await queryInterface.bulkInsert('categories', [
      {
        id: 'cf84ff52-0be8-4069-a20a-68aba4d0e1d1',
        name: 'Teknologi',
      },
      {
        id: '3f96a91e-fb84-4b5d-8e3c-2caca492e2db',
        name: 'Sains',
      },
      {
        id: 'b538c7e1-d838-4808-9247-7381e5a13e67',
        name: 'Fiksi',
      },
      {
        id: 'aba0b50b-02e3-441d-a9a8-89e57f1df3d2',
        name: 'Kuliner',
      },
      {
        id: '61411b11-6d6a-4172-8b7f-1e1543aa9f62',
        name: 'Olahraga',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('categories');
  },
};
