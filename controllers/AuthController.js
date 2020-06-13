const { generateTokenByUser }  = require('../services/auth')
const { User } = require('../models')

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
            lastname
        } = request.body;

        if (!email || !password) {
            return response.formatter.unprocess('Email ou password em falta.')
        }

        if(!firstname || !lastname) {
            return response.formatter.unprocess('Dados em falta tente novamente.')
        }

        User.findOne({ where: { email: email } })
            .then((user) => {

            // email já esta a ser usado.
            if (user) {
                return response.formatter.unprocess({
                    error: 'Email já esta a ser usado.'
                })
            }

            // Salvar utilizador na base de dados
            User.create({
                email: email,
                password: password,
                firstName: firstname,
                lastName: lastname,
            }).then(user => {
                return response.formatter.ok({
                    token: generateTokenByUser(user)
                })
            });

        })
    };
};