const express = require('express');
const signup = require('./signup.js');
const signin = require('./signin.js');
const profile = require('./profile.js');
const router = express.Router();

const indexRoute = router.get('/', (req, res, next) => {
    res.render('index');
});

routes = {
    signup,
    signin,
    indexRoute,
    profile
};

module.exports = routes;