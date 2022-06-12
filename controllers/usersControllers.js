const path = require ('path');
const fs = require('fs');
const {check, validationResult, body}=require('express-validator');check


const usuariosFilePath = path.join(__dirname,'../data/usuariosDataBase.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));


const usersControllers = {

    ingreso: (req, res,next) => {
    res.render("login")

    },
    processlogin: (req,res)=> {
        let errors =validationResult(req);

        if(errors.isEmpty()){
            for (let i=0;i<usuarios.length;i++){
                if(usuarios[i].email == req.body.email){
                    if (bcrypt.compareSync(req.body.password,req.body.password)){
                        let usuarioAloguearse = usuarios[i];
                        console.log('éntro bien');
                        break;
                    }
                }
            }
            if (usuarioAloguearse == undefined){
                return res.render('login',{errors: errors.errors})
            }
            req.session.usuariologueado =usuarioAloguearse;
        }else{
            return res.render('login',{errors});
        }
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