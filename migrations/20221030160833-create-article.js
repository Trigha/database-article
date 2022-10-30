'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('articles', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
      },
      shortDescription: {
        type: Sequelize.STRING,
        field: 'short_description',
      },
      description: {
        type: Sequelize.STRING,
      },
      CategoryId: {
        type: Sequelize.UUID,
        field: 'category_id',
      },
      isVisible: {
        type: Sequelize.BOOLEAN,
        field: 'is_visible',
      },
      imageUrl: {
        type: Sequelize.STRING,
        field: 'image_url',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('articles');
  },
};
