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
        rating: 3,
        tastingNotes: 'Sweet and smooth with caramel notes. Low acidity, decent for espresso.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        beans: 'Sumatra Mandheling',
        method: 'French Press',
        coffeeGrams: 32,
        waterGrams: 500,
        rating: 2,
        tastingNotes: 'Too earthy and muddy. Overpowering herbal bitterness, steeped too long.',
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
        rating: 3,
        tastingNotes: 'Decent but thin body. Berry notes present but finish is short.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        beans: 'Rwanda Bourbon',
        method: 'Chemex',
        coffeeGrams: 40,
        waterGrams: 640,
        rating: 5,
        tastingNotes: 'Exceptional clarity! Notes of red apple, caramel, and black tea. Perfect brew.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        beans: 'Peru Organic',
        method: 'Moka Pot',
        coffeeGrams: 22,
        waterGrams: 200,
        rating: 1,
        tastingNotes: 'Burnt and bitter. Used too fine grind and overheated. Undrinkable.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        beans: 'Java Estate',
        method: 'Cold Brew',
        coffeeGrams: 100,
        waterGrams: 1000,
        rating: 4,
        tastingNotes: 'Smooth and sweet with chocolate notes. Low acidity, great for iced coffee.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        beans: 'Yemen Mocha',
        method: 'Turkish',
        coffeeGrams: 12,
        waterGrams: 120,
        rating: 2,
        tastingNotes: 'Too intense and gritty. Exotic spice notes but unbalanced extraction.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        beans: 'Hawaii Kona',
        method: 'Pour Over',
        coffeeGrams: 24,
        waterGrams: 400,
        rating: 5,
        tastingNotes: 'Silky smooth with buttery body. Notes of macadamia nut and brown sugar.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        beans: 'Supermarket Pre-Ground',
        method: 'Drip Machine',
        coffeeGrams: 60,
        waterGrams: 900,
        rating: 1,
        tastingNotes: 'Stale and flat. No complexity. Harsh aftertaste. Never again.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        beans: 'Panama Geisha',
        method: 'Pour Over',
        coffeeGrams: 18,
        waterGrams: 300,
        rating: 5,
        tastingNotes: 'Jasmine and bergamot aromatics. Delicate tea-like body. Stunning coffee!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        beans: 'Indian Monsooned Malabar',
        method: 'French Press',
        coffeeGrams: 28,
        waterGrams: 450,
        rating: 3,
        tastingNotes: 'Unique musty character. Low acidity but lacks brightness. Interesting but not my style.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        beans: 'Vietnamese Robusta Blend',
        method: 'Vietnamese Phin',
        coffeeGrams: 20,
        waterGrams: 150,
        rating: 2,
        tastingNotes: 'Very strong and harsh. High caffeine but too bitter even with condensed milk.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        beans: 'El Salvador Pacamara',
        method: 'Aeropress',
        coffeeGrams: 17,
        waterGrams: 260,
        rating: 4,
        tastingNotes: 'Unique large bean variety. Sweet with stone fruit notes and creamy body.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Brews', null, {});
  }
};
