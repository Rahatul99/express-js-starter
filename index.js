const express = require("express");

const app = express();

app.all("/", (req, res) => {
  //after set app.all it will be accessible to all the methods
  res.send("This is home page with get request");
});

app.listen(5001, () => {
  console.log("listening on port 5000");
});
