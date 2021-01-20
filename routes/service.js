const express = require("express");
const routerService = express.Router();
const bodyParser = require("body-parser");
routerService.use(bodyParser.urlencoded({ extended: false }));

routerService.use("/service", (req, res, next) => {
  res.sendFile(__dirname + "/service.html");
});

module.exports = routerService;
