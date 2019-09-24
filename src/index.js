const express = require('express');
const engine = require('ejs-mate');
const morgan = require('morgan');

const path = require('path');
const routes = require('./routes/index');

// Initializations
const app = express();
require('./database');

// settings
app.set('port', process.env.PORT || 3000);
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(morgan('dev'));
// Permite al servidor recibir datos desde el cliente (formularios...), pero con extended: false impide recibir otro tipo de datos 
app.use(express.urlencoded({ extended: false }));


// routes
app.use(routes.indexRoute);
app.use(routes.signin);
app.use(routes.signup);

// global variables

// starting the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});

// Minuto del video 01:06:45