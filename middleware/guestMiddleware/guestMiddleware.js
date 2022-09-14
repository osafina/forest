function guestMiddleware (req, res, next) {
if(req.session.userLogged) {
    res.locals.isLogged = true;
    return res.redirect ('..')
}
next()}
module.exports = guestMiddleware