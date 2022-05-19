const path = require ('path');
const fs = require('fs');

const productosFilePath = path.join(__dirname,'../data/productosDataBase.json');
const productos = JSON.parse(fs.readFileSync(productosFilePath, 'utf-8'));


const productsControllers = {

    detalle: (req, res,next) => {
    
    res.render('detalleProducto');
    },

    carrito: (req, res,next) => {
        
        res.render('carrito')
    },

    index: (req, res) => {
        res.render('index', {productos: productos});
    },

    create:(req,res,next) => {
        res.render('crearProducto');
    },

    modificarProdycto: (req,res,next) => {
        res.render ('modificiarProducto')
    }

    store:(req,res) => {
        /*console.log(products.length)
        let productonew = {

            name: req.body.name,
            price: req.body.price,
            imagen: req.body.imagen,
            description: req.body.description,

        }
        console.log(productonew);*/
    }


};

module.exports = productsControllers;