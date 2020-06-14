const multer = require('multer')

var storage = multer.diskStorage({
    filename: function (req, file, cb) {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
        cb(null, file.fieldname + '-' + Date.now()+ '.' +extension)
    },

})

module.exports = multer({ storage: storage, dest: './public/uploads/' })