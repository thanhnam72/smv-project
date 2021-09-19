var express = require('express');
var uuid = require('uuid');
var router = express.Router();
var db = require('../../models');

router.post('/share', async (req, res) => {
  const id = uuid.v4();
  await db.Movie.create({
    id: id,
    title: "Movie " + id,
    url: req.body.url,
    sharedBy: req.userContext.userId,
  })

  res.createResponse(res, true)
});

router.get('/all', async (req, res) => {
  var movies = await db.Movie.findAll({
    include: [{
      model: db.User,
      as: 'user',
      attributes: ['email']
    }]
  });

  res.createResponse(res, movies)
});

module.exports = router;