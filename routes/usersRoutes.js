const express = require ('express');
const usersControllers = require('../controllers/usersControllers');


const router = express.Router();

router.get ("/login", usersControllers.ingreso);
router.get("/register", usersControllers.registro);

module.exports = router;