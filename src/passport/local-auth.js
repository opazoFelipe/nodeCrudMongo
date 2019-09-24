const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

passport.use ('local-signup', new LocalStrategy ({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        }, async (req, email, password, done) => {
            const user = new User();
            user.email = email;
            user.password = password;
            await user.save();
            done(null, user);
        }
    )
);