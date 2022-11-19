const express = require('express');
const {engine} = require('express-handlebars')

const path = require('path')
const routeMixer = require('./Routes/__ROUTE_MIXER__')

const app = express();


app.set('view engine', 'handlebars');

app.engine('handlebars', engine({
    defaultLayout: 'main', 
    layoutsDir: __dirname + '/views/layouts',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}));



routeMixer(app);

app.use(express.static(path.join(__dirname, "public")));
app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));
app.listen(3000);