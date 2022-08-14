const path = require('path');
const fs = require('fs');
const db = require('../database/models')

const productosFilePath = path.join(__dirname, '../data/productosDataBase.json');
const productos = JSON.parse(fs.readFileSync(productosFilePath, 'utf-8'));


const productsControllers = {
    carrito: (req, res, next) => {

        res.render('carrito')
    },

    index: (req, res) => {
        //llamamos a db seguido del alias del modelo.
        db.Products.findAll()
        .then(function(products){

            res.render('index', { productos: productos });
        })
    },

    create: (req, res, next) => {
        res.render('crearProducto');
    },

    eliminar: (req, res, next) => {
        let idParams = req.params.id;
        
        let newProducts = productos.filter(productos => productos.id != idParams)
        
        res.redirect('/products')
        

    },

    store: (req, res) => {
        if (req.file) {
    db.Products.create ({
            id: productos.length + 1,
            name: req.body.name,
            price: req.body.price,
            type: req.body.tipo,
            color: req.body.color,
            imagen: req.body.imagen,
            description: req.body.description,

        })

        productos.push(productonew);

        res.redirect('/products');
    } else { res.send('No adjunto la imgaen')}},

    detalle: (req, res) => {
        let id = req.params.id;
        let productoseleccionado = null;
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].id == id) {
                productoseleccionado = productos[i];
            }
        }
        res.render('detalleProducto', { productoseleccionado: productoseleccionado })
    },

    modificarProducto: (req, res, next) => {
        let idParams = req.params.id;
        let productToEdit = null;
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].id == idParams) {
                productToEdit = productos[i];
            }
        }
       
        res.render('modificarProducto', { productToEdit: productToEdit });
    },
    update: (req, res) => {
        let idParams = req.params.id;
        let productoAct = {
            id: idParams,
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
        }
        console.log(productoAct)
        let newProducts = productos.filter(productos => productos.id != idParams)
        newProducts.push(productoAct)

        let productoJSON = JSON.stringify(newProducts)
        fs.writeFileSync(productosFilePath, productoJSON)

        res.redirect('/products/')

    },

};

module.exports = productsControllers;