var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/all', (req, res) => {
  return db.sys_user.findAll().then(data => {
    res.createResponse(res, data);
  });
});

router.get('/get', (req, res) => {
  return db.sys_user.findOne({ where : { UserId: 1 }}).then(data => {
    res.createResponse(res, data);
  });
});

router.post('/add', (req, res) => {
  return db.sys_user.create({ Username: req.body.username }).then(data => {
    res.createResponse(res, data);
  });
});

router.post('/edit', (req, res) => {
  return db.sys_user.findOne({ where : { UserId: 2 }})
  .then(user => {
    user.update({ Email: req.body.email });
  })
  .then(data => {
    res.createResponse(res, data);
  });
});

router.get('/remove/:id', (req, res) => {
  return db.sys_user.destroy({ where : { UserId: req.params.id }})
  .then(data => {
    res.createResponse(res, data);
  });
});

module.exports = router;