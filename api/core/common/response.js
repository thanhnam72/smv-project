var createResponse = function(res, obj, messageError = null, status = 200) {
  res.status(status);
  var error = 0;
  if(status !== 200) {
    error = 1;
  }

  const result = {
    statusCode: status,
    error: error,
    messageError:  messageError,
    data: obj
  };

  res.json(result);
}

module.exports = {
  createResponse
};