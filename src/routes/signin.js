const express = require('express');
const router = express.Router();

router.get('/signin', (req, res, next)=>{
    res.send('This is the get route of signin');
});

router.post('/signin', (req, res, next)=>{

});

module.exports = router;