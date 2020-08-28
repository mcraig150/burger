const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const router = express.Router();
const exphbs = require('express-handlebars')

const routes = require("./controllers/controller")

app.use(express.json());

app.use(express.static('public'));


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.use(routes);

app.listen(PORT, () => console.log(`The app is currently listening at http://localhost:${PORT}`));
