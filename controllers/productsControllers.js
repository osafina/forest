const path = require ('path');

const productsControllers = {

    detalle: (req, res,next) => {
    
    res.render('producto')},

    carrito: (req, res,next) => {
        
        res.render('carrito')}


};

module.exports = productsControllers;