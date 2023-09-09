/* Importando db desde models */
const db= require('../models');

const controllers = {
  
  obtenerProductos: async (req, res) => {
    try {
      const productos = await db.Producto.findAll();
      res.render('productos', {productos});
    } catch (error) {
      console.error({ message: 'Error en el servidor', error });
      res.status(500).send('Error en el servidor');
    }
  },

  agregarProducto: async (req, res) => {
    const titulo = req.body.titulo;
    const descripcion = req.body.descripcion;
    const precio = req.body.precio;
    const stock = req.body.stock;

    try {
      await db.Producto.create({
        titulo,
        descripcion,
        precio,
        stock
      });
      res.status(200).redirect('/productos');
    } catch (error) {
      console.error({ message: 'Error en el servidor', error });
      res.status(500).send('Error en el servidor');
    }
  },

  actualizarProducto: async (req, res) => {
    const productoId = req.params.id;
    const { nombre, descripcion, precio, stock } = req.body;
  
    try {
      // Actualiza los campos del producto en función de los datos recibidos en la solicitud
      await db.Producto.update(
        {
          nombre: nombre,
          descripcion: descripcion,
          precio: precio,
          stock: stock,
        },
        {
          where: { id: productoId },
        }
      );
  
      // Después de actualizar, redirige a la página de productos
      res.redirect('/productos');
    } catch (error) {
      console.error({ message: 'Error en el servidor', error });
      res.status(500).send('Error en el servidor');
    }
  },
  

  eliminarProducto: async (req, res) => {
    const productoId = req.params.id;

    try {
      await db.Producto.destroy({
        where: { id: productoId }
      });
      res.status(200).redirect('/productos');
    } catch (error) {
      console.error({ message: 'Error en el servidor', error });
      res.status(500).send('Error en el servidor');
    }
  }
};

module.exports = controllers;