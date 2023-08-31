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
    }
  };
  
  module.exports = indexController;