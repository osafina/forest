const path = require('path');
const fs = require('fs');
const db = require('../database/models')
const bcrypt = require('bcryptjs');
const multer = require('multer');
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
        res.render('usuarios', { usuarios: usuarios });

    },

    processregister: (req, res) => {
        const resultValidation = validationResult(req);

        //si su longitud es mayor a 0, si hay errores, voy a renderizar la vista nuevamente. 
        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                //mapped convierte el array en un objeto literal.
                errors: resultValidation.mapped(),
                //esta propiedad almacena todo lo qe viene en el require del body.
                oldData: req.body
            });
        }
        //buscamos usuario que coincida con el email usando el modelo.
        let userInDB = User.findOne({ where: { email: req.body.email } })
        //revisar validación de si el main ya está registrado      
        if (userInDB) {
            return res.render('register', {
                errors: {
                    msg:
                        'Este mail ya ha sido registrado'
                },
                oldData: req.body
            },
            );
        }

        let userToCreate = {
            ...req.body,
            contrasenia: bcryptjs.hashSync(req.body.contrasenia, 10),
            confirmar: bcryptjs.hashSync(req.body.contrasenia, 10),
            imagen: req.file

        }

        let userCreated = User.create(userToCreate)
            .then(() => res.redirect("/login"))

    },

    processLogin: (req, res) => {

        const resultValidation = validationResult(req);

        //si su longitud es mayor a 0, si hay errores, voy a renderizar la vista nuevamente. 
        if (resultValidation.errors.length == 0) {
            //let userToLogin = User.findOne({ where: { email: req.body.email } })
            let userToLogin = User.findOne({ where: { email: req.body.email }, attributes: { exclude: ['createdAt', 'updatedAt'] }})
                .then(user => {
                    if (userToLogin) {
                        let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.contrasenia);

                        if (isOkThePassword) {
                            //Borramos la propiedad password por seguridad
                            delete userToLogin.password
                            //Guardamos en la propiedad userLogged al usuario que se logió.
                            req.session.userLogged = userToLogin

                            if (req.body.remember_user) {
                                res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 5 })
                            }

                            res.redirect('../../');
                        }}})
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
        res.redirect('..')
    },

}

module.exports = usersControllers;