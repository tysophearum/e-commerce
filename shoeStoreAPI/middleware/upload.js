const multer = require("multer")
const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/images");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname.replace(/\s+/g, ''));
    },
})

const upload = multer({
    storage: Storage
})
module.exports = upload;