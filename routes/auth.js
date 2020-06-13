const express = require('express');
const passport = require('passport');
const router = express.Router();
const AuthController = require('../controllers/AuthController');


router.get('/isauth', passport.authenticate( 'jwt', { session: false }), function( req, res ) {
    res.send({ success: true });
});

// register route
router.post('/register', AuthController.register);

// login route
router.get('/login', passport.authenticate( 'local', { session: false }), AuthController.login);

// logout route
router.get('/logout', AuthController.logout);

module.exports = router;
