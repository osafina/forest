const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const db = require('../database/models')
const User = db.User;


const { validationResult } = require('express-validator');



const usersControllers = {

    ingreso: (req, res, next) => {
        res.render("login");

    },

    registro: (req, res, next) => {
        res.render("register");

    },

    index: (req, res) => {
        User.findAll()
        .then(function(usuarios){

            res.render(path.resolve(__dirname, '..', 'views','usuarios'), { usuarios});

    })
},

    processregister: (req, res) => {
        const resultValidation = validationResult(req);

        //si su longitud es mayor a 0, si hay errores, voy a renderizar la vista nuevamente. 
        if (resultValidation.errors.length == 0 && req.body.password == req.body.confirmar) {
                //revisar validación de si el main ya está registrado
                        let userToCreate = {
                            ...req.body,
                            name: req.body.name,
                            email: req.body.email,
                            password: bcryptjs.hashSync(req.body.password, 10),
                            
                            image: req.file.originalname
                        }
                    
                
                User.create(userToCreate)
                .then(() => res.redirect("http://localhost:3030/users/login"))
                .catch(err => res.send(err));

        } else {
            return res.render('register', {
                errors: {
                    msg:
                        'Este mail ya ha sido registrado'
                }
            });
        }
    },
    
    processLogin: (req, res) => {

        const resultValidation = validationResult(req);

        //si su longitud es mayor a 0, si hay errores, voy a renderizar la vista nuevamente. 
        if (resultValidation.errors.length == 0) {
            //let userToLogin = User.findOne({ where: { email: req.body.email } })
            User.findOne({ where: { email: req.body.email }, attributes: { exclude: ['createdAt', 'updatedAt'] }})
                .then(userToLogin => {
                    if (userToLogin) {
                        let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
                        
                        if (isOkThePassword != undefined) {
                            //Borramos la propiedad password por seguridad
                            delete userToLogin.password
                            //Guardamos en la propiedad userLogged al usuario que se logió.
                            req.session.userLogged = userToLogin;

                            if (req.body.remember_user) {
                                res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 5 })
                            }
                            res.redirect('http://localhost:3030/');
                        }
                    }
                })
                .catch(err => res.send(err));
        } else {//Si no encuentro UserToLogin
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'Las credenciales son inválidas'
                    }
                }

            });
        }
    },

    logout: (req, res) => {
        res.clearCookie('email');
        req.session.destroy();
        console.log(res.locals.isLogged)
        res.redirect('../');
    },

}

module.exports = usersControllers;