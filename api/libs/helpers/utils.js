var crypto = require('crypto');

var encryptPassword = function(password) {
    return crypto.createHash('md5').update(password).digest("hex");
}

var genToken = function() {
    return crypto.randomBytes(32).toString('hex');
}

module.exports = {
    encryptPassword, genToken
}