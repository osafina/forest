const path = require('path');
const fs = require('fs');
const db = require('../database/models')

const productsControllers = {
    carrito: (req, res) => {

        res.render('carrito')
    },

    index: (req, res) => {

        db.Products.findAll()
        .then(function(products){

            res.render('index', { products: productos });
        })
    },

    create: (req, res, next) => {
        res.render('crearProducto');
    },

    eliminar: function (req, res) {
		const idParams = req.params.id;

		Movies.findByPk(idParams)
		.then((product) => {
			return res.render("moviesDelete", { Products: product });
		})
		.catch((error) => console.log(error));
	},

    store: (req, res) => {
        if (req.file) {
    db.Products.create.then (() =>({
            id: productos.length + 1,
            name: req.body.name,
            price: req.body.price,
            type: req.body.tipo,
            site: req.body.site,
            imagen: req.body.imagen,
            description: req.body.description,

        }));

        res.redirect('/products');
    } else { res.send('No adjunto la imgaen')}},

    detalle: (req, res) => {
		db.Products.findByPk(req.params.id).then((producto) => {
			res.render("detalleProducto.ejs", { producto });
		});
	},

    modificarProducto: (req, res) => {
        let idParams = req.params.id;
        let productToEdit= db.Products.findByPK (idParams)
        .then((productToEdit) => {
            res.render('modificarProducto', { productToEdit: productToEdit });

        })
    },
    update: (req, res) => {
        let idParams = req.params.id;
        const newProduct = {
            id: idParams,
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
        }

    Products.update( newProduct, {
        where: {
            id: idParams
        }
    })
    .then(() => {

        res.redirect('/products/')
    
    })
    .catch((error) => console.log(error));        


    },

};

module.exports = productsControllers;