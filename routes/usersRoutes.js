const express = require ('express');
const usersControllers = require('../controllers/usersControllers');

const { body, check } = require('express-validator');
const router = express.Router();

const validateCreateForm = [
    body('name').notEmpty().withMessage('Completar nombre.'),
    body('nameU').notEmpty().withMessage('Completar apellido.'),
    body('email').isEmail().withMessage('Ingresar mail válido.'),
]

const validatelogin = [
    check('email').isEmail(),
    check('password').isLength({min:8}).withMessage('la contraseña debe tener al menos 8 caracteres')
]

router.get ("/login", usersControllers.ingreso);
router.get("/register", usersControllers.registro);

router.get("/",usersControllers.index);

router.post('/',validateCreateForm, usersControllers.processlogin);

router.post('/login',usersControllers.processlogin);

module.exports = router;