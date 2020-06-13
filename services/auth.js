const config = require('../config')

module.exports.generateTokenByUser = function (user) {
    return jwt.encode({
        sub: user.id,
        iat: new Date().getTime()
    }, config.JWT.SECRET);
}