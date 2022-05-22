const express = require ('express');
const usersControllers = require('../controllers/usersControllers');


const router = express.Router();

router.get ("/login", usersControllers.ingreso);
router.get("/register", usersControllers.registro);

router.get("/",usersControllers.index);

router.post('/',usersControllers.store);

module.exports = router;