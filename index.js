const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fetch = require("node-fetch");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5000;

const API_KEY = process.env.API_KEY;

app
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, "public")))
  .engine("html", require("ejs").renderFile)
  .set("view engine", "html")
  .get("/", (req, res) => res.render("index"))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

app.get("/current", (req, res) => {
  const city = req.query.city !== undefined ? req.query.city : "Stockholm";

  const currentWeatherAPIUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(currentWeatherAPIUrl)
    .then((res) => res.json())
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
      res.redirect("/error");
    });
});

app.get("/forecast", (req, res) => {
  const city = req.query.city !== undefined ? req.query.city : "Stockholm";

  const forecastAPIUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&cnt=14`;

  fetch(forecastAPIUrl)
    .then((res) => res.json())
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
      res.redirect("/error");
    });
});
