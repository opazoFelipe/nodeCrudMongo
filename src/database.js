const mongoose = require('mongoose');
const { mongodb } = require('./keys');
const flash = require('connect-flash');

mongoose.connect(mongodb.URI, { useNewUrlParser: true })
    .then(db => console.log('Database is conected'))
    .catch(err => console.log(err));