const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {

    const userEmail = User.findOne({email: email});
    if(userEmail) {
        return done(null, false, req.flash('signupMessage', 'El email ingresado ya existe'));
    } else {
        const user = new User();
        user.email = email;
        user.password = user.encryptPassword(password);
        await user.save();
        done(null, user);
    }
}));