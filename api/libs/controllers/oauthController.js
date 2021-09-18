var express = require('express');
var moment = require('moment');
var router = express.Router();
var db = require('../../models');
var Utils = require(process.cwd() + '/libs/helpers/utils');
var security = require(process.cwd() + '/libs/config').get("security");
var log = require(process.cwd() + '/libs/log')(module);
var uuid = require('uuid');

router.post('/token', async function (req, res) {

  if (req.body.grant_type !== 'password') {
    res.createResponse(res, null, "grant_type is invalid", 400);
    return;
  }
  var data = {
    Email: req.body.username,
    Password: Utils.encryptPassword(req.body.password)
  };

  var user = await db.User.findOne({ where: data });

  if (!user) {
    user = {
      id: uuid.v4(),
      email: req.body.username,
      password: Utils.encryptPassword(req.body.password),
      token: Utils.genToken()
    };

    await db.User.create(user);

  } else {
    user.token = Utils.genToken();

    await user.save();
  }

  res.createResponse(res, {
    UserId: user.id,
    Username: user.email,
    Token: user.token,
  });
});

module.exports = router;