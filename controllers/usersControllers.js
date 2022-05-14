const path = require ('path');

const usersControllers = {

    ingreso: (req, res) => {
    console.log(__dirname)
    res.sendFile (path.join (__dirname, "../views/login.html"))},

    registro: (req, res) => {
        console.log(__dirname)
        res.sendFile (path.join (__dirname, "../views/register.html"))}
};

module.exports = usersControllers;