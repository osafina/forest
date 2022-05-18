const path = require ('path');

const mainControllers = {

    home: (req, res,next) => {
    
    res.render('home');
    },
 
    
};

module.exports = mainControllers;