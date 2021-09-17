var express = require('express');
var moment = require('moment');
var router = express.Router();
var db = require('../models');
var Utils = require(process.cwd() + '/libs/helpers/utils');
var security = require(process.cwd() + '/libs/config').get("security");
var log = require(process.cwd() + '/libs/log')(module);

router.post('/token', function (req, res) {

  if (req.body.grant_type !== 'password') {
    res.createResponse(res, null, "grant_type is invalid", 400);
    return;
  }
  var data = {
    UserName: req.body.username,
    Password: Utils.encryptPassword(req.body.password)
  };
  db.sys_user.findOne({ where: data }).then(user => {

    if (!user) {
      return res.createResponse(res, null, "username or password invalid", 400);
    }
    else {
      //create token authencation
      user.Token = Utils.genToken();
      user.TokenExpired = moment().add(security.tokenLife, 'm').toDate();
      return user.save().then(data => {
        res.createResponse(res, {
          UserId: data.UserId,
          Username: data.Username,
          Token: data.Token,
          TokenExpired: data.TokenExpired,
          CreatedDate: data.CreatedDate
        });
      });
    }
  });
});

module.exports = router;