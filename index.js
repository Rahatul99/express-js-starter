const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is home page");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("This is home page with post request");
});

app.listen(5001, () => {
  console.log("listening on port 5000");
});
