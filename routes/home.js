const express = require("express");
const routerHome = express.Router();
const bodyParser = require("body-parser");
routerHome.use(bodyParser.urlencoded({ extended: false }));

routerHome.use("/", (req, res, next) => {
  res.sendFile(__dirname + "/home.html");
});

module.exports = routerHome;
