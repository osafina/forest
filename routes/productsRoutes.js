const express = require ('express');
const productsControllers = require ('../controllers/productsControllers')

const router = express.Router();

router.get ("/", productsControllers.index);
router.get("/carrito",productsControllers.carrito);


router.get('/crearProducto',productsControllers.create);
router.post('/',productsControllers.store);
router.get('/modificarProducto/:id/', productsControllers.modificarProducto)
router.put('/modificarProducto/:id/', productsControllers.update)
router.delete ('/eliminar/:id/', productsControllers.eliminar)


router.get('/:id/',productsControllers.detalle)
module.exports = router;