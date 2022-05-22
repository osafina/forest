const path = require ('path');
const fs = require('fs');

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

    modificarProducto: (req,res,next) => {
        res.render ('modificiarProducto');
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


};

module.exports = productsControllers;