const express = require ('express');
const rutasMain = require('./routes/mainRoutes.js');
const rutasProducto = require('./routes/productsRoutes.js');
const rutasUsers = require('./routes/usersRoutes.js');


const app = express ();

app.use (express.static ('public'));

const port = process.env.PORT || 3030;

app.listen (3030, () => console.log ( 'El server funciona en el puerto 3030'))

app.use ("/", rutasMain);
app.use('/',rutasProducto);
app.use ("/", rutasUsers);






