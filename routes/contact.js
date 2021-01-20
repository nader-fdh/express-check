const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));

router.use("/contact", (req, res, next) => {
  res.sendFile(__dirname + "/contact.html");
});

module.exports = router;
