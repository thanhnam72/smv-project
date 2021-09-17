var logger = require(process.cwd() +  '/libs/log')(module);

module.exports = function (app) {
  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    logger.debug('%s %d %s', req.method, res.statusCode, req.url);
    res.createResponse(res, null, 'Not found', 404);
    return;
  });

  // error handlers
  app.use(function (err, req, res, next) {
    logger.error('%s %d %s', req.method, res.statusCode, err.message);
    res.status(err.status || 500);
    const result = {
      statusCode: err.status || 500,
      error: 1,
      messageError: err.message,
      data: null
    };
    res.json(result);
    return;
  });
}