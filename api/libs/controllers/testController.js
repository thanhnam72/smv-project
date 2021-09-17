var router = require('express').Router();
const multer = require('multer');
var config = require(process.cwd() + '/libs/config');
var fs = require('fs');
const pathStore =  config.get("storeFile");
var bodyParser = require('body-parser');
var formidable = require('formidable');
var db = require('../models');

form = new formidable.IncomingForm();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, pathStore);
    },
    filename: function(req, file, cb) {
        var arr = file.originalname.split('#');
        cb(null, new Date().toISOString().replace(/:/g, '-') + '_' + arr[arr.length - 1]);
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    cb(null, true);
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

/* GET home page. */
router.post('/', function (req, res) {
    res.createResponse(res, {
        msg: 'Server is running (^.^)'
    })
});


router.post("/upload", [upload.single('fileUpload')], (req, res, next) => {
    var arr = req.file.path.split('\\');
        res.createResponse(res, {
        status: true,
        fileName: arr[arr.length - 1]
    });
});


router.post("/uploadfile", function(req, res, next) {
    
})


router.get('/get/:name', function(request, response){
    const fileName = request.params.name;
    // fs.readdirSync(pathStore).forEach(file => {
    //   if(file === fileName)

    // });

    return response.sendfile(config.get("storeFile") + `/${fileName}`);
});

router.get('/db/getAllUser', (req, res) => {
  db.sys_user.findAll().then(data => {
    res.createResponse(res, data);
  });
});

module.exports = router;