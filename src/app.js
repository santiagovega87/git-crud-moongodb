const express = require('express');
const Router = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
//const ejs = require('ejs');

//connection to bd
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log('Db conectected'))
    .catch(err => console.log('err'));


//importing routers
const indexRoutes = require('./routes/index');


//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middleweres
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/',indexRoutes);

//starting the server

app.listen(app.get('port'), () => {
    console.log('Server on port');
});