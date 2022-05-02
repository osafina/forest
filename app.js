const express = require ('express');
const app = express ();
const path = require ('path');
app.use (express.static ('public'));

const port = process.env.PORT || 3030;

app.listen (3030, () => console.log ( 'El server funciona en el puerto 3030'))

app.get ("/", (req, res) => 
<<<<<<< HEAD
res.sendFile (path.join (__dirname, "/views/home.html")));

app.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/register.html'));

});
=======
res.sendFile (path.join (__dirname, "/views/home.html")))
app.get ("/register", (req, res) => 
res.sendFile (path.join (__dirname, "/views/register.html")))
app.get ("/login", (req, res) => 
res.sendFile (path.join (__dirname, "/views/login.html")))
>>>>>>> a3f95087ca490331831826e2ff5c3d6e7873b48e
