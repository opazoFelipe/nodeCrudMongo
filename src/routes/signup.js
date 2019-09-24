const express = require('express');
const router = express.Router();

router.get('/signup', (req, res, next)=>{
    
    res.render('signup');
});

router.post('/signup', (req, res, next)=>{
    
    res.send('received');
});

module.exports = router;