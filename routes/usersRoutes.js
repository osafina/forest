const express = require ('express');
const usersControllers = require('../controllers/usersControllers');
const { body } = require('express-validator');
const router = express.Router();

const validateCreateForm = [
    body('name').notEmpty().withMessage('Completar nombre.'),
    body('nameU').notEmpty().withMessage('Completar apellido.'),
    body('email').isEmail().withMessage('Ingresar mail válido.'),
]

router.get ("/login", usersControllers.ingreso);
router.get("/register", usersControllers.registro);

router.get("/",usersControllers.index);

router.post('/',validateCreateForm, usersControllers.store);

module.exports = router;