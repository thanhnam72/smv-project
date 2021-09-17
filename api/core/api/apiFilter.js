const passport = require('passport');
const route = require('../common/routeApi').route;
const response = require('../common/response');
const config = require(process.cwd() + '/libs/config');

module.exports = function (app)
{
  var addResponse = function(req,res,next) {
    res.createResponse = response.createResponse;
    next();
  }

	var filter = function(req,res,next) {
    if (config.get("security").EnableAuth) {
      passport.authenticate('bearer', function(err, user, info) {
        if (user === false) {
          return res.createResponse(res, null,'Token Invalid', 401);
        } else {
          next();
        }
      })(req, res, next);
    } else {
      next();
    }
  };
  
  app.use('/', addResponse);
  app.use(route, filter);
}
