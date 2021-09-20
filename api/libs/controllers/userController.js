var express = require('express');
var router = express.Router();

router.post('/', async (req, res) => {
  const userInfo = {
    email: req.userContext.email,
    id: req.userContext.email
  }

  res.createResponse(res, userInfo)
});

module.exports = router;