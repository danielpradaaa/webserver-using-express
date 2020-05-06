const express = require('express')
const app = express()
const hbs = require('hbs');
const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

// Express HBS
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// Helpers
hbs.registerHelper('getYear', () => new Date().getFullYear());


app.get('/', function(req, res) {
    // res.send('Hello World');

    res.render('home', {
        name: 'Daniel',
    });
})

app.get('/about', function(req, res) {
    // res.send('Hello World');

    res.render('about');
})

app.listen(port, () => console.log('Escuchando el puerto ' + port));