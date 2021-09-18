var BearerStrategy = require('passport-http-bearer').Strategy;
var db = require('../../models');

module.exports = function (passport) {
  passport.use(new BearerStrategy((accessToken, next) => {
    db.User.findOne({ where : { Token: accessToken }}).then(user => {
      if(user) {
        next(null, user);
      }
      else {
        next(null, false);
      }
    }).catch(err => {
      return next(err, false);
    });
  }
  ));
}

