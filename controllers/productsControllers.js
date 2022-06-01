const path = require ('path');
const fs = require('fs');
const { strictEqual } = require('assert');
const { stringify } = require('querystring');

const productosFilePath = path.join(__dirname,'../data/productosDataBase.json');
const productos = JSON.parse(fs.readFileSync(productosFilePath, 'utf-8'));


const productsControllers = {


    carrito: (req, res,next) => {
        
        res.render('carrito')
    },

    index: (req, res) => {
        res.render('index', {productos: productos});
    },

    create:(req,res,next) => {
        res.render('crearProducto');
    },

    eliminarProducto: (req,res, next) => { 
        let idParams = req.params.id;
        let productToDelete = null;
    },

    store:(req,res) => {
        
        let productonew = {
            id:productos.length+1,
            name: req.body.name,
            price: req.body.price,
            imagen: req.body.imagen,
            description: req.body.description,

        }
        productos.push(productonew);
        let productoJSON =JSON.stringify(productos);
        fs.writeFileSync(productosFilePath,productoJSON);
       
    },

    detalle: (req, res) => {
        let id = req.params.id;
        let productoseleccionado=null;
        for (let i=0;i<productos.length;i++){
            if(productos[i].id==id)
            {
                productoseleccionado =productos[i];
            }
        }
        res.render('detalleProducto',{productoseleccionado: productoseleccionado})
        },

        modificarProducto: (req,res,next) => {
            let idParams = req.params.id;
            let productToEdit = null;
            for (let i=0;i<productos.length;i++){
                if(productos[i].id==id)
                {
                    productToEdit =productos[i];
                }
            }
            
            res.render ('modificarProducto', {productToEdit: productToEdit});
        },
        update: (req, res) => {
            let idParams = req.params.id;
            let productoAct = {
                id: req.body.id,
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
            }
            let newProducts = productos.filter( product => product.id != idParams)
            newProducts.push(productoAct)

            let productsJSON = JSON.stringify(products)
            fs.writeFileSync (productosFilePath, productoJSON)

            res.redirect ('products/detalleProducto' + idParams)

        },
        destroy: (req, res) {

        },

};

module.exports = productsControllers;