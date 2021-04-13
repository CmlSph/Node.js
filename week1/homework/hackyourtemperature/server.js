const express = require("express");
const exphbs = require("express-handlebars");
const axios = require("axios");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello from backend to frontend!");
});

app.listen(port);
