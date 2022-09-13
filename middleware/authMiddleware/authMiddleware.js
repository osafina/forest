function guestMiddleware (req, res, next) {
    if(!req.session.userLogged) {

        return res.resdirect ('../../views/login')
        
    }
    next()}

module.exports = guestMiddleware

