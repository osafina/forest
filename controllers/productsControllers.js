const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const Product = db.Product;
const Op = db.Sequelize.Op;

const productsControllers = {
    carrito: (req, res) => {

        res.render('carrito')
    },

    index: (req, res) => {

        Product.findAll()
        .then(function(productos){

            res.render('index', { productos: productos });
        })
    },

    create: (req, res) => {
        res.render('crearProducto');
    },

    

    store: (req, res) => {
        if (req.file) {
    let newProduct = {
            ...req.body,
            name: req.body.name,
            price: req.body.price,
            imagen: req.file.originalname,
            description: req.body.description,
            stock: req.body.stock          
        }            
        
        Product.create(newProduct).then (() => res.redirect('../products'));

    } else { res.send('No adjunto la imgaen')}},

    detalle: (req, res) => {
        let idParams = req.params.id;
		Product.findByPk(idParams)
        .then((producto) => {
			res.render("detalleProducto.ejs", { producto });
		});
	},

    modificarProducto: (req, res) => {
        let idParams = req.params.id;
        Product.findByPk (idParams)
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

    Product.update( newProduct, {
        where: {
            id: idParams
        }
    })
    .then(() => {

        res.redirect('/products/')
    
    })
    .catch((error) => console.log(error));        


    },
    destroy: (req, res) => {
		Product
			.destroy({
				where: {
					id: req.params.id
				}
			})
			.then(() => res.redirect('http://localhost:3030/products/'));
	},

};

module.exports = productsControllers;