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
    const { titulo, descripcion, precio, stock } = req.body;

    try {
      await db.Producto.update(
        { titulo, descripcion, precio, stock },
        { where: { id: productoId } }
      );
      res.status(200).redirect('/productos');
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
      res.status(200).redirect('/');
    } catch (error) {
      console.error({ message: 'Error en el servidor', error });
      res.status(500).send('Error en el servidor');
    }
  }
};

module.exports = controllers;