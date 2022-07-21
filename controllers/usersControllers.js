const path = require ('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');



const { validationResult }=require('express-validator');

const User = require('../models/Users');

const usuariosFilePath = path.join(__dirname,'../data/usuariosDataBase.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));


const usersControllers = {

    ingreso: (req, res,next) => {
    res.render("login");

    },
    processregister: (req,res)=> {
        const resultValidation = validationResult(req);

//si su longitud es mayor a 0, si hay errores, voy a renderizar la vista nuevamente. 
        if(resultValidation.errors.length > 0) {
            return res.render('register',{
//mapped convierte el array en un objeto literal.
                errors: resultValidation.mapped(),
//esta propiedad almacena todo lo qe viene en el require del body.
                oldData: req.body});
        }
        let unserInDB= User.findByField('email',req.body.email);

        if (unserInDB){
            return res.render('register',{
                errors: resultValidation.mapped(),
                oldData:req.body});
        }

        let userToCreate = {
            ...req.body,
            imagen:req.file
            
        }

        let userCreated = User.create(userToCreate);

        return res.redirect('home');
    },

    processLogin : (req,res) => {
        
    let userToLogin = User.findByField('email', req.body.email);
		
    if(userToLogin) {
        let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
        if (isOkThePassword) {
            delete userToLogin.password;
            req.session.userLogged = userToLogin;

            if(req.body.remember_user) {
                res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
            }
            console.log('entroo');
            return res.redirect('home');
        } 
        return res.render('login', {
            errors: {
                email: {
                    msg: 'Las credenciales son inválidas'
                }
            }
            
        });
    }

    return res.render('login', {
        errors: {
            email: {
                msg: 'No se encuentra este email en nuestra base de datos'
            }
        }
        
    });
    },


    registro: (req, res,next) => {
        res.render("register");
    
    },

    index: (req,res) => {
        res.render('usuarios',{usuarios: usuarios});
        
    },

}

module.exports = usersControllers;