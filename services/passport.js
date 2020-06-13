
const passport = require('passport');
const LocalStrategy = require('passport-local');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('../config');
const { User } = require('../models');

// settar options para options
const localOptions = {
    usernameField: 'email',
    passwordField: 'password'
};

// Create local strategy
const localSignin = new LocalStrategy(localOptions, (email, password, done) => {

        // verificar se utilizador existe.
        User.findOne({ where: { email: email } })
            .then(( user) => {

            // User não foi encontrado pelo email
            if (!user) return done(null, false);

            // verificar password
            user.comparePassword(password, ( err, isMatch ) => {
                if (err) return done(err);

                // As password são diferentes
                if (!isMatch) return done(null, false);

                // Match
                return done(null, user);
            });
        });
    });

// Setup options for JWT strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader( 'authorization' ),
    secretOrKey: config.JWT.SECRET
};

// Create JWT strategy
const jwtSignin = new JwtStrategy( jwtOptions, (payload, done) => {

    //find user by id
    User.findById( payload.sub, (err, user) => {
        if (err) return done(err, false);

        //utilizador não foi entrado.
        if (!user) done( null, false);

        // utilizador encontrado.
        done(null, user);
    });
});

// Make Passport use strategies
passport.use( localSignin );
passport.use( jwtSignin );