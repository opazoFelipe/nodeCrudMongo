const express = require('express');
const router = express.Router();

router.get('/signup', (req, res, next)=>{
    // res.send('This is the get route of signup');
    res.render('signup');
});

router.post('/signup', (req, res, next)=>{
    // console.log(req.body);
    // const { email, password} = req.body;
    // console.log('Email received: ', email, '\nPassword received: ', password);
    res.send('received');
});

module.exports = router;