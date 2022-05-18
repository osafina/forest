const path = require ('path');
const fs = require('fs');

const productsControllers = {

    detalle: (req, res,next) => {
    
    res.render('producto')
    },

    carrito: (req, res,next) => {
        
        res.render('carrito')
    },

    index: (req, res,next) => {
        res.render('index');
    },

    create:(req,res,next) => {
        res.render('crearProducto');
    },

    store:(req,res) => {
        let productonew = {
            name: req.body.name
        }
        console.log(productonew);
    }


};

module.exports = productsControllers;