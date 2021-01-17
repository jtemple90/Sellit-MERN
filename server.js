const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require('cors');

const routes = require('./routes');

const port = process.env.PORT || 3001;
const app = express();

require("dotenv").config();
require("./config/database");

app.use(logger("dev"));
app.use(express.json());
app.use(cors(corsOptions));

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

app.use('/products', routes.products);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});


app.listen(port, () => console.log(`Running on local port ${port}`));
