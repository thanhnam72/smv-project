var router = require('express').Router();

/* GET home page. */
router.get('/', function (req, res) { 
  res.createResponse(res, {
    msg: 'Server is running (^.^)'
  })
});

module.exports = router;
