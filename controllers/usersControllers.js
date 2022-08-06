const path = require ('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const session = require('express-session')



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
//buscamos usuario que coincida con el email usando el modelo.
        let userInDB= User.findByField('email', req.body.email);

//revisar validación de si el main ya está registrado      
         if (userInDB){
            return res.render('register',{ 
            errors: {msg:
            'Este mail ha sido registrado'}, 
            oldData: req.body
        },
         );
         }

        let userToCreate = {
            ...req.body,
            contrasenia: bcryptjs.hashSync(req.body.contrasenia, 10),
            confirmar: bcryptjs.hashSync(req.body.contrasenia, 10),
            imagen:req.file
            
        }

        let userCreated = User.create(userToCreate);

        return res.redirect('login');
    },

    processLogin : (req,res) => {
        
    let userToLogin = User.findByField('email', req.body.email);

		
    if(userToLogin) {
        let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.contrasenia);
        
        if (isOkThePassword) {
//Borramos la propiedad password por seguridad
            delete userToLogin.password
//Guardamos en la propiedad userLogged al usuario que se logió.
        req.session.userLogged = userToLogin

        if (req.body.remember_user) {
            res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 5})
        }

           res.redirect ('..');
        }; 

//Si no encuentro UserToLogin
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
    
    logout: (req, res) => {
        res.clearCookie('email');
        req.session.destroy();
        res.redirect('..')
    } ,

}

module.exports = usersControllers;