const path = require ('path');
const fs = require('fs');

const productosFilePath = path.join(__dirname,'../data/productosDataBase.json');
const productos = JSON.parse(fs.readFileSync(productosFilePath, 'utf-8'));


const mainControllers = {

    home: (req, res,next) => {
    
    res.render('home',{productos: productos});
    },
 
    
};

module.exports = mainControllers;