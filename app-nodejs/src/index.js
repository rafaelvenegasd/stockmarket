const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// Connect server
const app = express();

const server = app.listen(3333, listening);

function listening() {
    console.log('Server listening in port 3333');
}

// Settings
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname:'.hbs',
    // helpers: require('./lib/handlerbars') 
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes 
app.use('/', require('./controllers/dashboard'));
app.use('/about', require('./controllers/about'));
app.use('/products', require('./controllers/products'));
app.use('/top', require('./controllers/top'));
app.use('/search', require('./controllers/search'));
app.use('/contact', require('./controllers/contact'));

// Public
app.use(express.static(path.join(__dirname, 'public')));