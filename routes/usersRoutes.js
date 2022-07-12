const express = require ('express');
const usersControllers = require('../controllers/usersControllers');
const multer = require('multer')

let multerDiskStorage = multer.diskStorage ({
    destination: (req, res, callback) => {
        let folder = path.join (__dirname + '../public');
        callback(null, folder);
    },
    filename:  (req, res, callback) => {
        let imageName= "usuario" + Date.now + path.extname(file.originalname);
        callback (null, imageName)
    }
})
let fileUpload = multer ({storage: multerDiskStorage});

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

router.post('/',fileUpload.single('imagen'), validateCreateForm, usersControllers.processlogin);


router.post('/login', validatelogin ,usersControllers.processlogin);

module.exports = router;