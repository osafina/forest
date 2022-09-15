const express = require ('express');
const productsControllers = require ('../controllers/productsControllers');
const multer = require('multer');
const path = require('path');
const { body } = require('express-validator');
const router = express.Router();

router.get ("/", productsControllers.index);
router.get("/carrito",productsControllers.carrito);

const storage = multer.diskStorage({
    destination:(req,file,cb)=> {
        cb(null,'./public/images/');
    },
    filename:(req,file,cb)=> {
        
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null,fileName);
    }
});

const uploadFile = multer({storage});

const validateCreateForm = [
    body('name').notEmpty().withMessage('Completar nombre.'),
   body('price').notEmpty().withMessage('Colocar un precio.'),
    body('category').notEmpty().withMessage('Ingresar categoria'), 
    body('description').notEmpty().withMessage('Completar descripción.'),
    body('image').custom((value, { req }) => {
        let file = req.file;
    let acceptedExt = ['.jpg', '.png', '.gif'];
        if(!file) {
            throw new Error ('Tenes que subir una imagen.')
        } 
        
            else {
                let fileExt = file.originalname;

                if (!acceptedExt.includes(path.extname(fileExt))) {
                   throw new Error (`Las extensiones permitidas de archivos son ${fileExt.join(', ')}`);
                }

        }

        return true 
    }) 
]

router.get('/crearProducto', productsControllers.create);
router.post('/', uploadFile.single('imagen'), validateCreateForm, productsControllers.store);
router.get('/modificarProducto/:id/', productsControllers.modificarProducto)
router.put('/modificarProducto/:id/', productsControllers.update)
router.delete('/eliminar/:id/', productsControllers.destroy)




router.get('/:id/',productsControllers.detalle)
module.exports = router;