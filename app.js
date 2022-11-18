const express = require('express');
const engine = require('express-handlebars').engine

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res, next) => {
    res.render('home', {layout: false});
});


app.listen(3000);