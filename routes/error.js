const express = require("express");
const routerError = express.Router();
const bodyParser = require("body-parser");
routerError.use(bodyParser.urlencoded({ extended: false }));

routerError.use("/", (req, res, next) => {
  res.sendFile(__dirname + "/error.html");
});

module.exports = routerError;
