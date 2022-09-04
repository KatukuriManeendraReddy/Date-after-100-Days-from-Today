const express = require("express");
const app = express();
var addDays = require("date-fns/addDays");
app.get("/", (request, response) => {
  const newDate = addDays(new Date(), 100);
  response.send(
    `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
  );
});

module.exports = app;

app.listen(3000);
