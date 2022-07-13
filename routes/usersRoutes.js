const express = require ('express');
const router = express.Router();

const multer = require('multer');
const path = require('path');

const { body, check } = require('express-validator');

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

const usersControllers = require('../controllers/usersControllers');

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

router.post('/register',uploadFile.single('imagen'), usersControllers.processregister);



module.exports = router;