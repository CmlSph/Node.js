const express = require("express");
const exphbs = require("express-handlebars");
const axios = require("axios");

const app = express();
const port = 3000;

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({ defaultLayout: false }));

app.use(express.json()); //for parsing json in request body
app.use(express.urlencoded({ extended: true })); // for form data

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/weather", (req, res) => {
  const cityName = req.body.cityName;
  console.log(cityName);
  res.send(cityName);
});

app.listen(port);
