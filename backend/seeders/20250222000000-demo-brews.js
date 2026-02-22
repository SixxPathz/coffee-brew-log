'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Brews', [
      {
        beans: 'Ethiopian Yirgacheffe',
        method: 'Pour Over',
        coffeeGrams: 20,
        waterGrams: 320,
        rating: 5,
        tastingNotes: 'Bright acidity with floral notes and hints of blueberry. Smooth finish.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        beans: 'Colombian Supremo',
        method: 'French Press',
        coffeeGrams: 30,
        waterGrams: 500,
        rating: 4,
        tastingNotes: 'Rich and full-bodied with chocolate and nutty undertones.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        beans: 'Kenyan AA',
        method: 'Aeropress',
        coffeeGrams: 18,
        waterGrams: 250,
        rating: 5,
        tastingNotes: 'Complex flavor profile with citrus notes and wine-like acidity.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        beans: 'Brazilian Santos',
        method: 'Espresso',
        coffeeGrams: 18,
        waterGrams: 36,
        rating: 4,
        tastingNotes: 'Sweet and smooth with caramel notes. Low acidity, perfect for espresso.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        beans: 'Sumatra Mandheling',
        method: 'French Press',
        coffeeGrams: 32,
        waterGrams: 500,
        rating: 4,
        tastingNotes: 'Earthy and herbal with a heavy body. Notes of cedar and dark chocolate.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        beans: 'Guatemala Antigua',
        method: 'Pour Over',
        coffeeGrams: 22,
        waterGrams: 350,
        rating: 5,
        tastingNotes: 'Balanced cup with cocoa and spice notes. Pleasantly sweet finish.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        beans: 'Costa Rican Tarrazu',
        method: 'Aeropress',
        coffeeGrams: 16,
        waterGrams: 240,
        rating: 4,
        tastingNotes: 'Clean and crisp with bright acidity. Hints of honey and citrus.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        beans: 'Tanzanian Peaberry',
        method: 'Pour Over',
        coffeeGrams: 20,
        waterGrams: 300,
        rating: 5,
        tastingNotes: 'Vibrant and complex with berry notes and a wine-like finish.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Brews', null, {});
  }
};
