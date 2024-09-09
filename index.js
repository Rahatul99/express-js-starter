const express = require("express");
const handler = require("./handler");

const app = express();
app.use(express.json()); //before use this we got the req.body undefined.but after set this parser i got the real data
app.set("view engine", "ejs");

app.get("/about", (req, res) => {
  res.cookie("name", "Hello world", {});
  res.end();
});

app.listen(5001, () => {
  console.log("listening on port 5001");
});
