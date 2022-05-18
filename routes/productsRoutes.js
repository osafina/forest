const express = require ('express');
const productsControllers = require ('../controllers/productsControllers')

const router = express.Router();

router.get ("/index", productsControllers.index);
router.get("/carrito",productsControllers.carrito);

router.get('/index',productsControllers.index);
router.get('/crearProducto',productsControllers.create);
router.post('/index',productsControllers.store);

router.get('index/:id/',productsControllers.detalle)
module.exports = router;