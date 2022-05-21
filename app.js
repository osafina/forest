const express = require ('express');

const rutasMain = require('./routes/mainRoutes.js');
const rutasProducto = require('./routes/productsRoutes.js');
const rutasUsers = require('./routes/usersRoutes.js');

const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride =  require('method-override');

const bodyParser = require('body-parser');




const app = express ();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use (express.static ('public'));

app.set('view engine', 'ejs');

const port = process.env.PORT || 3030;

app.listen (3030, () => console.log ( 'El server funciona en el puerto 3030'))

app.use ("/", rutasMain);
app.use('/products',rutasProducto);
app.use ("/", rutasUsers);



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger('dev'));
app.use(methodOverride('_method'));





