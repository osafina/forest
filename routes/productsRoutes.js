const express = require ('express');
const productsControllers = require ('../controllers/productsControllers')

const router = express.Router();

router.get ("/producto", productsControllers.detalle);
router.get("/carrito",productsControllers.carrito)

module.exports = router;