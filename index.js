const express = require("express");
const handle = require("./handle");

const app = express();

app.locals.title = "My App";

app.get("/", handle);

app.post("/", (req, res) => {
  res.send("This is home page with post request");
});

app.listen(5001, () => {
  console.log("listening on port 5000");
});
