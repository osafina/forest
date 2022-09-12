const express = require ('express');
const productsControllers = require ('../controllers/productsControllers');
const multer = require('multer');
const path = require('path');

const router = express.Router();

router.get ("/", productsControllers.index);
router.get("/carrito",productsControllers.carrito);

const storage = multer.diskStorage({
    destination:(req,file,cb)=> {
        cb(null,'./public/images/avatar');
    },
    filename:(req,file,cb)=> {
        
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null,fileName);
    }
});

const uploadFile = multer({storage});

router.get('/crearProducto',productsControllers.create);
router.post('/',uploadFile.single('imagen'), productsControllers.store);
router.get('/modificarProducto/:id/', productsControllers.modificarProducto)
router.put('/modificarProducto/:id/', productsControllers.update)
router.delete('/eliminar/:id/', productsControllers.destroy)




router.get('/:id/',productsControllers.detalle)
module.exports = router;