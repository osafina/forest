const path = require ('path');

const usersControllers = {

    ingreso: (req, res,next) => {
    
    res.render("login")},

    registro: (req, res,next) => {
        res.render("register")}
};

module.exports = usersControllers;