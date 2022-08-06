const express = require ('express');
const productsControllers = require ('../controllers/productsControllers');
const multer = require('multer')

const router = express.Router();

router.get ("/", productsControllers.index);
router.get("/carrito",productsControllers.carrito);

let multerDiskStorage = multer.diskStorage ({
    destination: (req, res, callback) => {
        let folder = path.join (__dirname + '../public');
        callback(null, folder);
    },
    filename:  (req, res, callback) => {
        let imageName= "producto" + Date.now + path.extname(file.originalname);
        callback (null, imageName)
    }
})
let fileUpload = multer ({storage: multerDiskStorage});

router.get('/crearProducto',productsControllers.create);
router.post('/',fileUpload.single('imagen'), productsControllers.store);
router.get('/modificarProducto/:id/', productsControllers.modificarProducto)
router.put('/modificarProducto/:id/', productsControllers.update)
router.delete ('/eliminar/:id/', productsControllers.eliminar)




router.get('/:id/',productsControllers.detalle)
module.exports = router;