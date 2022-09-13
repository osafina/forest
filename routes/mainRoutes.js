const mainControllers = require ('../controllers/mainControllers')
const express = require ('express');

const router = express.Router();

router.get ("/", mainControllers.home);
router.get ("/404", mainControllers.error404)



module.exports = router;