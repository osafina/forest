const db = require('../database/models')
const User = db.User;

function userLoggedMiddleware (req, res, next) {
    
res.locals.isLogged = false;

let emailInCookie = req.cookies.email
let userFromCookie = User.findOne({ where: { email: req.body.email }})

if(userFromCookie) {

    req.session.userLogged = userFromCookie
}
//si tengo alguien en la cookie lo paso a session.
if(req.session  && req.session.userLogged){
    
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
    /* pasamos lo que tenemos en session a una variable local, 
    ya que no estoy renderizando una vista sino pasando una variable local
    para que puedan ser ultilizadas en distintas vistas, por eso
    pasamos lo que tengo en sesión a una variable local.
    */
}

next();


}
module.exports = userLoggedMiddleware;
//falta agregar barra al ejs. 1.30