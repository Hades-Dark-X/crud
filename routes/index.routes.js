/* importando dependencias */
const express = require('express');
const indexController= require('../controllers/indexControllers')
const controllers= require('../controllers/productosController')

const indexrouter = express.Router();


indexrouter.get('/', indexController.Inicio);

/* rutas para el crud */
indexrouter.get('/productos', controllers.obtenerProductos);
indexrouter.post('/productos/agregar', controllers.agregarProducto)

indexrouter.get('/productos/editar/:id', indexController.obtenerProducto);
indexrouter.put('/productos/actualizar/:id', controllers.actualizarProducto);

indexrouter.get('/productos/eliminar/:id', controllers.eliminarProducto)
indexrouter.delete('/productos/eliminar/:id', controllers.eliminarProducto);

indexrouter.get('/contacto', indexController.contacto);
indexrouter.get('/login', indexController.login);

indexrouter.use((req, res, next) => res.status(404).render('404'));

module.exports= indexrouter;