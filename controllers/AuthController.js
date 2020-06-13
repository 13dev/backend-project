const { generateTokenByUser }  = require('../services/auth')

module.exports = new class AuthController {
    login (request, response, next) {
        response.formatter.ok({
            token: generateTokenByUser(request.user)
        })
    }

    // Logica de registar
    register (request, response, next) {

        const {
            email,
            password,
            firstname,
            lastname,
        } = req.body;

        if (!email || !password) {
            return response.formatter.unprocess({
                error: 'Email ou password em falta.'
            })
        }

        User.findOne({ email: email }, (err, user) => {
            if (err) return next(err);

            const newUser = new User({
                email: email,
                password: password,
                firstName: firstname,
                lastName: lastname,
            });

            // email já esta a ser usado.
            if (user) {
                return response.formatter.unprocess({
                    error: 'Email já esta a ser usado.'
                })
            }
            // Salvar utilizador na base de dados
            newUser.save( function() {
                if (err) return next(err)

                return response.formatter.ok({
                    token: generateTokenByUser(newUser)
                })

            });
        });
    };
};