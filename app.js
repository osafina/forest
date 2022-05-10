const express = require ('express');
const app = express ();
const path = require ('path');
const mainRoutes = require ('./routes/mainRoutes')
app.use (express.static ('public'));

const port = process.env.PORT || 3030;

app.listen (3030, () => console.log ( 'El server funciona en el puerto 3030'))

app.get ("/", mainRoutes);

app.get ("/register", (req, res) => 
res.sendFile (path.join (__dirname, "/views/register.html")));

app.get('/producto', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/producto.html'));
});

app.get('/carrito', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/carrito.html'));

});

app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/login.html'));

});
