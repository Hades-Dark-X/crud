/* Importando las dependencias */
const express= require('express');
const path = require('path');
const indexrouter= require('./routes/index.routes');
const api= require('./routes/productos.routes')

const app= express();

/* Configuracion */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));    /* ruta de las vistas */

app.use(express.static(path.join(__dirname, 'public'))); /* ruta absoluta de public */
app.use(express.urlencoded({ extended: true })); /* recibe los datos del formulario */
app.use(express.json()) /* pasa los datos del formulario en formato JSON */ 

/* rutas */
app.use('/', indexrouter)
app.use('/productos', api)


app.listen(3000);
console.log("Servidor escuchando en el puerto 3000");