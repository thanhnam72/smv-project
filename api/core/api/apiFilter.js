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
    // console.log(req);
    if (config.get("security").EnableAuth) {
      passport.authenticate('bearer', function(err, user, info) {
        if (user === false) {
          return res.createResponse(res, null,'Invalid token', 401);
        } else {
          req.userContext = {
            userId: user.id,
            token: user.token,
            email: user.email
          }

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
