const { generateTokenByUser }  = require('../services/auth')

module.exports = new class AuthController {
    login (request, response, next) {
        //TODO: to implement
    }

    register (request, response, next) {
        const { email, password } = req.body;

        if (!email || !password) {
            return response.formatter.unprocess({
                error: "Email ou password em falta."
            })
        }

        User.findOne({ email: email }, function( err, existingUser ) {
            const user = new User({
                email: email,
                password: password
            });

            // Handle errors
            if ( err ) { return next( err ); }

            // Handle existing user error
            if ( existingUser ) {
                return response.formatter.unprocess({
                    error: "Email já esta a ser usado."
                })
            }

            // Save user to DB
            user.save( function() {
                if (err) return next(err)

                return response.formatter.ok({
                    token: generateTokenByUser(user)
                })

            });
        });
    };
};