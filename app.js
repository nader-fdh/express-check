const express = require("express");
const app = express();

const router = require("./routes/contact");
const routerHome = require("./routes/home");
const routerServices = require("./routes/service");
const routerError = require("./routes/error");

app.use(express.static("public"));

const day = new Date();
const checkDay = day.getDay();
const time = day.getHours();
console.log(time, checkDay);
if (checkDay !== 5 && checkDay !== 6 && time > 9 && time < 17) {
  app.use(router);
  app.use(routerServices);
  app.use(routerHome);
} else {
  app.use(routerError);
}

const port = 5000;
app.listen(port, (err) => {
  if (err) throw err;
  else true;
});
