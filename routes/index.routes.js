/* importando dependencias */
const express = require('express');
const indexController= require('../controllers/indexControllers')
const controllers= require('../controllers/productosController')

const indexrouter = express.Router();


indexrouter.get('/', indexController.Inicio);
indexrouter.get('/agregar', indexController.agregar);
indexrouter.get('/productos', controllers.obtenerProductos);
indexrouter.post('porductos', controllers.agregarProducto)
indexrouter.get('/contacto', indexController.contacto);
indexrouter.get('/login', indexController.login);

indexrouter.use((req, res, next) => res.status(404).render('404'));

module.exports= indexrouter;