const path = require ('path');
const mainControllers = {
    home: (req, res) => {
    console.log(__dirname)
    res.sendFile (path.join (__dirname, "../views/home.html"))
}};
module.exports = mainControllers