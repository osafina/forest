const express = require ('express');
const methodOverride =  require('method-override');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
//const userLoggedMiddleware = require('/Users/Fede/Documents/Repositorios/forest/middleware/userlLoggedMiddleware/userLoggedMiddleware')



const app = express ();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use (express.static ('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger('dev'));
app.use(session( {secret:'mensaje secreto',
reserve: false,
saveUninitialized: false}));
//app.use(userLoggedMiddleware)
app.set('view engine', 'ejs');

const port = process.env.PORT || 3030;

app.listen (3030, () => console.log ( 'El server funciona en el puerto 3030'))


const rutasMain = require('./routes/mainRoutes.js');
const rutasProducto = require('./routes/productsRoutes.js');
const rutasUsers = require('./routes/usersRoutes.js');

app.use ("/", rutasMain);
app.use('/products',rutasProducto);
app.use ("/users", rutasUsers);



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger('dev'));





