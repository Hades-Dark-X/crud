/* Importando las dependencias */
const express= require('express');
const path = require('path');
const indexrouter= require('./routes/index.routes');


const port= 3000
const app= express();

/* Configuracion */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));    /* ruta de las vistas */

app.use(express.static(path.join(__dirname, 'public'))); /* ruta absoluta de public */
app.use(express.urlencoded({ extended: true })); /* recibe los datos del formulario */
app.use(express.json()) /* pasa los datos del formulario en formato JSON */ 

/* rutas */
app.use('/', indexrouter)

/* Servidor escuchando en el puerto 3000 */
app.listen(port);
console.log(`Server escuchando en: http://localhost:${port}`);