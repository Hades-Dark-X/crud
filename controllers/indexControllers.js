/* importando el modelo y la conexión a db */
const db= require('../models');

const indexController = {
    Inicio: (req, res) => {
      res.render('index', {titulo: 'Game Store'});
    },

    agregar: (req, res) => {
        res.render('agregar', {titulo: 'Game Store - Agregar'})
    },

    productos: (req, res)=> {
        res.render('productos', {titulo:'Game Store - Productos'})
    },

    contacto: (req, res)=> {
        res.render('contacto', {titulo: 'Game Store - Contacto'})
    },

    login: (req, res)=> {
        res.render('login', {titulo: 'Game Store - Login'})
    },

    obtenerProducto: async (req, res) => {
      const productoId = req.params.id;
    
      try {
          const producto = await db.Producto.findByPk(productoId);
      
          if (!producto) {
              return res.status(404).send('Producto no encontrado');
          }
      
          res.render('editar', { producto });
      } catch (error) {
          console.error({ message: 'Error en el servidor', error });
          res.status(500).send('Error en el servidor');
      }
  },
  
  };
  
  module.exports = indexController;