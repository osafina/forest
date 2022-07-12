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

module.exports = fileUpload;