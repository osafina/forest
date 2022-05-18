const express = require ('express');
const productsControllers = require ('../controllers/productsControllers')

const router = express.Router();

router.get ("/producto", productsControllers.detalle);
router.get("/carrito",productsControllers.carrito);

router.get('/index',productsControllers.index);
router.get('/crearProducto',productsControllers.create);
router.post('/index',productsControllers.store);


module.exports = router;