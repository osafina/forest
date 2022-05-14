const path = require ('path');

const productsControllers = {

    detalle: (req, res) => {
    console.log(__dirname)
    res.sendFile (path.join (__dirname, "../views/producto.html"))},

    carrito: (req, res) => {
        console.log(__dirname)
        res.sendFile (path.join (__dirname, "../views/carrito.html"))}


};

module.exports = productsControllers;