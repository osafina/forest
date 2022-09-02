const express = require ('express');
const router = express.Router();

const multer = require('multer');
const path = require('path');
const guestMiddleware = require('../middleware/guestMiddleware/guestMiddleware')

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
const { processLogin } = require('../controllers/usersControllers');

const validateCreateForm = [
    body('name').notEmpty().withMessage('Completar nombre.'),
    body('nameU').notEmpty().withMessage('Completar apellido.'),
    body('email').isEmail().withMessage('Formato de email incorrecto'), 
    body('date').notEmpty().withMessage('Completar fecha.'),
    body('adress').notEmpty().withMessage('Completar dirección.'),
    body('confirmar').notEmpty().withMessage('Completar contraseña.'),
    body('image').custom((value, { req }) => {
        let file = req.file;
    let acceptedExt = ['.jpg', '.png', '.gif'];
        if(!file) {
            throw new Error ('Tenes que subir una imagen.')
        } 
        
            else {
                let fileExt = file.originalname;

                if (!acceptedExt.includes(path.extname(fileExt))) {
                   throw new Error (`Las extensiones permitidas de archivos son ${fileExt.join(', ')}`);
                }

        }

        return true 
    })
]

const validatelogin = [
    check('email').isEmail(),
    check('password').isEmpty(),
    //isLength({min:8}).withMessage('la contraseña debe tener al menos 8 caracteres')
]

router.get ("/login", guestMiddleware, usersControllers.ingreso);
router.get("/register", guestMiddleware, usersControllers.registro);
router.get('/logout', usersControllers.logout),

router.get("/",usersControllers.index); //solo vista adm


router.post('/register',uploadFile.single('image'), validateCreateForm, usersControllers.processregister);
router.post('/login',usersControllers.processLogin);



module.exports = router;