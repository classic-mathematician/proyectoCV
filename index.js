const express = require('express');
const exhbs = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');

const { database } = require('./keys');


const app = express();


// settings
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exhbs({
    defaultLayout: 'main', 
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partial'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// middlewars
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));


//routes
app.use('/GowPlay', require('./route/crud'));

//public
app.use(express.static(path.join(__dirname, 'public')));

// inicio del servidor
app.listen(app.get('port'), () => {
    console.log('server on port :', app.get('port'));
});

app.use(express.static('src/views/layouts')); 