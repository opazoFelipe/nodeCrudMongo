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

// Estrategia para validar registro de usuarios

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {

    const userEmail = await User.findOne({email: email});
    if(userEmail) {
        console.log('error en registro');
        return done(null, false, req.flash('signupMessage', 'El email ingresado ya existe'));
    } else {
        const user = new User();
        user.email = email;
        user.password = user.encryptPassword(password);
        await user.save();
        done(null, user);
    }
}));

// Estrategia para validar login de usuarios

// passport.use('local-signin', new LocalStrategy({
//     usernameField: 'email',
//     passwordField: 'password',
//     passReqToCallback: true
// }, async (req, email, password, done) => {
//     const user = await User.findOne({email: email});
//     if(!user) {
//         return done(null, false, req.flash('signinMessage', 'El usuario ingresado no existe'));
//     } else {
//         if(!user.comparePassword(password, user.password)){
//             return done(null, false, req.flash('signinMessage', 'La contraseña ingresada es incorrecta'));
//         } 

//         return done(null, user);
//     }
// }));


passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, async (req, email, password, done) => {
    const user = await User.findOne({email: email});
    if(!user) {
      return done(null, false, req.flash('signinMessage', 'No User Found'));
    }
    if(!user.comparePassword(password)) {
      return done(null, false, req.flash('signinMessage', 'Incorrect Password'));
    }
    return done(null, user);
  }));
