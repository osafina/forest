function guestMiddleware (req, res, next) {
if(req.session.userLogged) {
    return res.resdirect ('..')
}
next()}
module.exports= guestMiddleware