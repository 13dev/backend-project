const config = require('../config')
const jwt = require('jwt-simple');


module.exports.generateTokenByUser = function (user) {
    return jwt.encode({
        sub: user.id,
        iat: new Date().getTime()
    }, config.JWT.SECRET);
}