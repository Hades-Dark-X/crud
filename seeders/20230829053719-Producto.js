'use strict';

const {v4: uuidv4}= require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Productos', [
      {
        id: uuidv4(),
        titulo: 'FIFA 22',
        descripcion: 'Deportes, Soccer',
        precio: 39.99,
        stock: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        titulo: 'Mario Kart 8 Deluxe',
        descripcion: 'Deportes, Automovilísmo',
        precio: 59.99,
        stock: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Productos', null, {});
  },
};

