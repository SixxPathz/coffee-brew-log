'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Brews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      beans: {
        type: Sequelize.STRING
      },
      method: {
        type: Sequelize.STRING
      },
      coffeeGrams: {
        type: Sequelize.FLOAT
      },
      waterGrams: {
        type: Sequelize.FLOAT
      },
      rating: {
        type: Sequelize.INTEGER
      },
      tastingNotes: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Brews');
  }
};