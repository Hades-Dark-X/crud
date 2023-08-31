/* importando Router desde express y productos controller */
const express = require('express');
const controllers= require('../controllers/productosController')
const api = express.Router();


/* Ruta de Productos*/
api.get('/productos', controllers.obtenerProductos)
api.post('/productos', controllers.agregarProducto);
api.patch('/productos/:id', controllers.actualizarProducto);
api.delete('/productos/:id', controllers.eliminarProducto);

module.exports = api;
