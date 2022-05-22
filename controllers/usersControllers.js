const path = require ('path');
const fs = require('fs');


const usuariosFilePath = path.join(__dirname,'../data/usuariosDataBase.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));


const usersControllers = {

    ingreso: (req, res,next) => {
    res.render("login")

    },

    registro: (req, res,next) => {
        res.render("register");
    
    },

    index: (req,res) => {
        res.render('usuarios',{usuarios: usuarios});
        
    },

    store: (req,res) => {

        let usuarionew = {
            id:usuarios.length+1,
            name: req.body.name,
            email: req.body.email,
            imagen: req.body.imagen,
            password: req.body.password,
            date: req.body.date,
            adress: req.body.adress
        }

        usuarios.push(usuarionew);
        let usuarioJSON =JSON.stringify(usuarionew);
        fs.writeFileSync(usuariosFilePath,usuarioJSON);
    }

};

module.exports = usersControllers;