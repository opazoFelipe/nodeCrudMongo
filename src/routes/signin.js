const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/signin', (req, res, next)=>{
    res.render('signin');
});

router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    passReqToCallback: true
}));

module.exports = router;