const path = require ('path');
const fs = require('fs');
const bcrypt = require('bcrypt');



const {check, validationResult, body}=require('express-validator');

const User = require('../models/Users');

const usuariosFilePath = path.join(__dirname,'../data/usuariosDataBase.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));


const usersControllers = {

    ingreso: (req, res,next) => {
    res.render("login");

    },
    processlogin: (req,res)=> {
        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0) {
            return res.render('register',{
                errors: resultValidation.mapped(),
                oldData:req.body});
        }

        let unserInDB= User.findByField('email',req.body.email);

        if (unserInDB){
            return res.render('register',{
                errors: {
                    email: {
                        msg: 'este email ya se this.registro'}
                },
                oldData:req.body});
        }

        let userToCreate = {
            ...req.body,
              
        }

        let userCreated = User.create(userToCreate);

        return res.send('Ok se guardo usuario');
    },

    registro: (req, res,next) => {
        res.render("register");
    
    },

    index: (req,res) => {
        res.render('usuarios',{usuarios: usuarios});
        
    },

}

module.exports = usersControllers;