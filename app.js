const express = require('express');
const engine = require('express-handlebars').engine
const path = require('path')
const routeMixer = require('./Routes/__ROUTE_MIXER__')

const app = express();

routeMixer(app);

app.use(express.static(path.join(__dirname, "public")));
app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.listen(3000);