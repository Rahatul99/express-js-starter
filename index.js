const express = require("express");

const app = express();

app.enable("case sensitive routing");

app.all("/about", (req, res) => {
  res.send("This is home page with get request");
});

app.listen(5001, () => {
  console.log("listening on port 5000");
});
